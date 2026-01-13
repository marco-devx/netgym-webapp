import { getPlayer, updatePlayer } from "@services";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { BioGeneratorRef, Player } from "@types";
import { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEditable } from "./useEditable";

export const usePlayerDetail = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { name } = useParams<{ name: string }>();
	const queryClient = useQueryClient();

	const initialPlayer = location.state as Player | undefined;

	const {
		data: player,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["player", name],
		queryFn: () => getPlayer(name as string),
		enabled: !!name,
		initialData: initialPlayer,
		initialDataUpdatedAt: initialPlayer ? Date.now() : undefined,
	});

	const [isBioGenerated, setIsBioGenerated] = useState(false);

	const bioRef = useRef<BioGeneratorRef>(null);

	const handleSave = async (data: Partial<Player>) => {
		if (!player) return;

		const updates: Partial<Player> = {};
		let hasChanges = false;

		for (const key of Object.keys(data) as Array<keyof Player>) {
			if (data[key] !== player[key]) {
				// @ts-ignore
				updates[key] = data[key];
				hasChanges = true;
			}
		}

		if (hasChanges) {
			const updatedPlayer = await updatePlayer(player.name, updates);
			queryClient.setQueryData(["player", name], updatedPlayer);

			const currentState = window.history.state;
			window.history.replaceState({ ...currentState, usr: updatedPlayer }, "");

			await queryClient.invalidateQueries({ queryKey: ["player", name] });
		}
	};

	const {
		isEditing,
		formData,
		isSaving,
		startEdit,
		cancelEdit,
		saveEdit,
		handleInputChange,
	} = useEditable<Player>(player, handleSave);

	// Wire up handlers to match component expectations
	const handleEditClick = startEdit;
	const handleCancelClick = cancelEdit;
	const handleSaveClick = saveEdit;

	const handleBioGenerated = () => setIsBioGenerated(true);
	const handleRenewBio = () => bioRef.current?.renew();
	const handleNavigateBack = () => navigate(-1);
	const handleNavigateHome = () => navigate("/");

	return {
		player,
		isLoading,
		error,
		isEditing,
		formData,
		isSaving,
		isBioGenerated,
		bioRef,
		handleEditClick,
		handleCancelClick,
		handleSaveClick,
		handleInputChange,
		handleBioGenerated,
		handleRenewBio,
		handleNavigateBack,
		handleNavigateHome,
	};
};
