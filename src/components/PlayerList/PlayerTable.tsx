import type { Player } from "@types";
import { useNavigate } from "react-router";
import { LoadingSpinner } from "../common";

interface PlayerTableProps {
	players: Player[];
	isLoading: boolean;
}

export const PlayerTable = ({ players, isLoading }: PlayerTableProps) => {
	const navigate = useNavigate();

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!players.length) {
		return <div className="p-4 text-center">No players found.</div>;
	}

	return (
		<div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
			<table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
				<thead className="bg-gray-50 uppercase tracking-wider font-semibold text-gray-500">
					<tr>
						<th className="px-6 py-3 text-left">Name</th>
						<th className="px-6 py-3 text-left">Position</th>
						<th className="px-6 py-3 text-left">Hits</th>
						<th className="px-6 py-3 text-left">HR</th>
						<th className="px-6 py-3 text-left">AVG</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200">
					{players.map((player) => (
						<tr
							key={player.name}
							onClick={() =>
								navigate(`/players/${player.name}`, { state: player })
							}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									navigate(`/players/${player.name}`, { state: player });
								}
							}}
							tabIndex={0}
							className="hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none focus:bg-gray-100"
						>
							<td className="px-6 py-4 font-medium text-gray-900">
								{player.name}
							</td>
							<td className="px-6 py-4 text-gray-700">{player.position}</td>
							<td className="px-6 py-4 text-gray-700">{player.hits}</td>
							<td className="px-6 py-4 text-gray-700">{player.homeruns}</td>
							<td className="px-6 py-4 text-gray-700">{player.average}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
