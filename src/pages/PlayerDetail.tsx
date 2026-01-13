import { BioGenerator } from "@components";
import { usePlayerDetail } from "@hooks";
import type { StatFieldProps } from "@types";

export const PlayerDetail = () => {
	const {
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
	} = usePlayerDetail();

	if (error || (!player && !isLoading)) {
		return (
			<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
				<p className="text-red-600 mb-4 font-medium">
					Player not found or error loading data.
				</p>
				<button
					type="button"
					onClick={handleNavigateHome}
					className="text-blue-600 hover:underline"
				>
					Back to Home
				</button>
			</div>
		);
	}

	if (!player) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-gray-500 font-medium">
					Loading player details...
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<button
					type="button"
					onClick={handleNavigateBack}
					className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
				>
					<span className="mr-2">←</span> Back to Players
				</button>

				<div className="bg-white rounded-lg shadow-xl overflow-hidden">
					<div className="bg-blue-600 px-6 py-6 sm:px-10">
						<div className="flex justify-between items-center text-white">
							<div>
								<h1 className="text-3xl font-bold">{player.name}</h1>
								<p className="text-blue-100 mt-1 font-medium">
									{player.position}
								</p>
							</div>
							<div className="flex gap-3">
								{!isEditing ? (
									<button
										type="button"
										onClick={handleEditClick}
										className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors backdrop-blur-sm font-medium"
									>
										Edit Details
									</button>
								) : (
									<div className="flex gap-2">
										<button
											type="button"
											onClick={handleCancelClick}
											disabled={isSaving}
											className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors backdrop-blur-sm"
										>
											Cancel
										</button>
										<button
											type="button"
											onClick={handleSaveClick}
											disabled={isSaving}
											className="px-4 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-bold shadow-sm"
										>
											{isSaving ? "Saving..." : "Save Changes"}
										</button>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="px-6 py-8 sm:px-10">
						<div className="flex justify-between items-center mb-4 border-b pb-2">
							<h2 className="text-xl font-semibold text-gray-800">
								Season Statistics
							</h2>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
							<StatField
								label="Hits"
								field="hits"
								value={player.hits}
								isEditing={isEditing}
								editedValue={formData.hits}
								onChange={handleInputChange}
							/>
							<StatField
								label="Homeruns"
								field="homeruns"
								value={player.homeruns}
								isEditing={isEditing}
								editedValue={formData.homeruns}
								onChange={handleInputChange}
							/>
							<StatField
								label="Average"
								field="average"
								value={player.average}
								isEditing={isEditing}
								editedValue={formData.average}
								onChange={handleInputChange}
							/>
							<StatField
								label="RBI"
								field="rbi"
								value={player.rbi}
								isEditing={isEditing}
								editedValue={formData.rbi}
								onChange={handleInputChange}
							/>

							<StatField
								label="Games"
								field="games"
								value={player.games}
								isEditing={isEditing}
								editedValue={formData.games}
								onChange={handleInputChange}
							/>
							<StatField
								label="At Bats"
								field="at_bats"
								value={player.at_bats}
								isEditing={isEditing}
								editedValue={formData.at_bats}
								onChange={handleInputChange}
							/>
							<StatField
								label="Runs"
								field="runs"
								value={player.runs}
								isEditing={isEditing}
								editedValue={formData.runs}
								onChange={handleInputChange}
							/>
							<StatField
								label="Doubles"
								field="doubles"
								value={player.doubles}
								isEditing={isEditing}
								editedValue={formData.doubles}
								onChange={handleInputChange}
							/>

							<StatField
								label="Triples"
								field="triples"
								value={player.triples}
								isEditing={isEditing}
								editedValue={formData.triples}
								onChange={handleInputChange}
							/>
							<StatField
								label="Walks"
								field="walks"
								value={player.walks}
								isEditing={isEditing}
								editedValue={formData.walks}
								onChange={handleInputChange}
							/>
							<StatField
								label="Strikeouts"
								field="strikeouts"
								value={player.strikeouts}
								isEditing={isEditing}
								editedValue={formData.strikeouts}
								onChange={handleInputChange}
							/>
							<StatField
								label="Stolen Bases"
								field="stolen_bases"
								value={player.stolen_bases}
								isEditing={isEditing}
								editedValue={formData.stolen_bases}
								onChange={handleInputChange}
							/>

							<StatField
								label="Caught Stealing"
								field="caught_stealing"
								value={player.caught_stealing}
								isEditing={isEditing}
								editedValue={formData.caught_stealing}
								onChange={handleInputChange}
							/>
							<StatField
								label="OBP"
								field="obp"
								value={player.obp}
								isEditing={isEditing}
								editedValue={formData.obp}
								onChange={handleInputChange}
							/>
							<StatField
								label="SLG"
								field="slg"
								value={player.slg}
								isEditing={isEditing}
								editedValue={formData.slg}
								onChange={handleInputChange}
							/>
							<StatField
								label="OPS"
								field="ops"
								value={player.ops}
								isEditing={isEditing}
								editedValue={formData.ops}
								onChange={handleInputChange}
							/>
						</div>

						<div className="mt-8 border-t pt-6">
							<div className="flex justify-between items-center mb-4">
								<h3 className="text-lg font-semibold text-gray-800">
									AI Biography
								</h3>
								{isBioGenerated && (
									<button
										type="button"
										onClick={handleRenewBio}
										className="text-sm px-3 py-1 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-md font-medium transition-colors"
									>
										Renew Bio
									</button>
								)}
							</div>
							<BioGenerator
								ref={bioRef}
								player={player}
								onBioGenerated={handleBioGenerated}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const StatField = ({
	label,
	field,
	value,
	isEditing,
	editedValue,
	onChange,
}: StatFieldProps) => {
	return (
		<div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
			<p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
				{label}
			</p>
			{isEditing ? (
				<input
					type="number"
					value={editedValue !== undefined ? editedValue : value}
					onChange={(e) => onChange(field, Number(e.target.value))}
					className="w-full mt-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
			) : (
				<p className="text-xl font-bold text-gray-900 mt-1">{value}</p>
			)}
		</div>
	);
};
