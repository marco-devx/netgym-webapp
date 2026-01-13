export interface Player {
	name: string;
	position: string;
	hits: number;
	homeruns: number;
	average: number;
	games: number;
	at_bats: number;
	runs: number;
	doubles: number;
	triples: number;
	rbi: number;
	walks: number;
	strikeouts: number;
	stolen_bases: number;
	caught_stealing: number;
	obp: number;
	slg: number;
	ops: number;
}

export interface PlayersResponse {
	success: boolean;
	message: string;
	status_code: number;
	data: Player[];
	errors?: Record<string, unknown>;
}

export type BioStatus = "PENDING" | "COMPLETED" | "FAILED";

export interface BioGenerationJob {
	id: string;
	status: BioStatus;
	result?: string;
	player_name: string;
}

export interface BioGenerationResponse {
	id?: string;
	job_id?: string;
}

export interface BioGeneratorProps {
	player: Player;
	onBioGenerated?: () => void;
}

export interface BioGeneratorRef {
	renew: () => void;
}

export interface StatFieldProps {
	label: string;
	field: keyof Player;
	value: string | number;
	isEditing: boolean;
	editedValue?: string | number;
	onChange: (key: keyof Player, value: string | number) => void;
}
