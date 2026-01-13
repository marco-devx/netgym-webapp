import { getPlayers } from "@services";
import { useQuery } from "@tanstack/react-query";
import type { Player } from "@types";
import { useState } from "react";

export const useHome = () => {
	const [sortBy, setSortBy] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");

	const {
		data: playersResponse,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["players", sortBy],
		queryFn: () => getPlayers(sortBy || undefined),
	});

	const allPlayers: Player[] = playersResponse?.data || [];

	const uniquePlayers = Array.from(
		new Map(allPlayers.map((p) => [p.name, p])).values(),
	);

	const players = uniquePlayers.filter((player) => {
		if (!player.name) return false;
		const query = searchQuery.trim().toLowerCase();
		if (!query) return true;
		return player.name.toLowerCase().includes(query);
	});

	return {
		sortBy,
		setSortBy,
		searchQuery,
		setSearchQuery,
		players,
		isLoading,
		isError,
	};
};
