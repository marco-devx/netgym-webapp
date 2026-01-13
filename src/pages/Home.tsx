import { PlayerTable, SortControl } from "@components";
import { useHome } from "@hooks";

export const Home = () => {
	const {
		sortBy,
		setSortBy,
		searchQuery,
		setSearchQuery,
		players,
		isLoading,
		isError,
	} = useHome();

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">
						Baseball Players
					</h1>
					<p className="text-lg text-gray-600">
						View and sort player statistics
					</p>
				</div>

				<div className="bg-white rounded-lg shadow-xl p-6">
					<div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
						<h2 className="text-2xl font-semibold text-gray-800">
							Player List
						</h2>
						<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
							<div className="relative w-full sm:w-64">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										className="h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<input
									type="text"
									placeholder="Search players..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out shadow-sm"
								/>
							</div>
							<SortControl currentSort={sortBy} onSortChange={setSortBy} />
						</div>
					</div>

					{isError ? (
						<div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-center">
							Error loading players. Please try again later.
						</div>
					) : (
						<PlayerTable players={players} isLoading={isLoading} />
					)}
				</div>
			</div>
		</div>
	);
};
