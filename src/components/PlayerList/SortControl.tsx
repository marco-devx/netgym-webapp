interface SortControlProps {
	currentSort: string | null;
	onSortChange: (sort: string) => void;
}

export const SortControl = ({
	currentSort,
	onSortChange,
}: SortControlProps) => {
	return (
		<div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
			<span className="font-medium text-gray-700">Sort by:</span>
			<div className="flex gap-2">
				<button
					type="button"
					onClick={() => onSortChange("hits")}
					className={`px-4 py-2 rounded-md font-medium text-sm transition-all focus:ring-2 focus:ring-offset-1 focus:outline-hidden ${
						currentSort === "hits"
							? "bg-blue-600 text-white shadow-md ring-blue-600"
							: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-gray-400"
					}`}
				>
					Hits
				</button>
				<button
					type="button"
					onClick={() => onSortChange("homeruns")}
					className={`px-4 py-2 rounded-md font-medium text-sm transition-all focus:ring-2 focus:ring-offset-1 focus:outline-hidden ${
						currentSort === "homeruns"
							? "bg-blue-600 text-white shadow-md ring-blue-600"
							: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-gray-400"
					}`}
				>
					Homeruns
				</button>
			</div>
		</div>
	);
};
