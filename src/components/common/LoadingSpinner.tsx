export const LoadingSpinner = () => {
	return (
		<div className="flex flex-col items-center justify-center py-12">
			<div className="relative">
				<div className="w-16 h-16 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin" />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<span className="text-2xl">⚾</span>
				</div>
			</div>
			<p className="mt-4 text-gray-600 font-medium animate-pulse">
				Loading players...
			</p>
			<p className="text-sm text-gray-400 mt-1">Warming up the pitchers</p>
		</div>
	);
};
