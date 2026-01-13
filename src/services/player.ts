import { axiosInstance } from "@config";
import type {
	BioGenerationJob,
	BioGenerationResponse,
	Player,
	PlayersResponse,
} from "@types";

export const getPlayers = (sortBy?: string): Promise<PlayersResponse> => {
	const params = sortBy ? { sort_by: sortBy } : {};
	return axiosInstance
		.get<PlayersResponse>("/players/", { params })
		.then((res) => res.data);
};

export const getPlayer = (name: string): Promise<Player> => {
	return getPlayers().then((res) => {
		const player = res.data.find((p) => p.name === name);
		if (!player) throw new Error("Player not found");
		return player;
	});
};

export const generateBio = (player: Player): Promise<string> => {
	return axiosInstance
		.post<string | BioGenerationResponse>("/players/bio/generate", player)
		.then((res) => {
			const data = res.data;
			if (typeof data === "string") return data;

			if (typeof data === "object" && data !== null) {
				if ("id" in data && typeof data.id === "string") return data.id;
				if ("job_id" in data && typeof data.job_id === "string")
					return data.job_id;
			}
			console.error("Unexpected generateBio response:", data);
			return String(data);
		});
};

export const getBioStatus = (jobId: string): Promise<BioGenerationJob> => {
	return axiosInstance
		.get<BioGenerationJob>(`/players/bio/${jobId}`)
		.then((res) => res.data);
};

export const updatePlayer = (
	name: string,
	data: Partial<Player>,
): Promise<Player> => {
	return axiosInstance
		.patch<{ success: boolean; data: Player }>(`/players/${name}`, data)
		.then((res) => res.data.data);
};
