import { generateBio, getBioStatus } from "@services";
import type { BioGeneratorProps, BioGeneratorRef } from "@types";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export const BioGenerator = forwardRef<BioGeneratorRef, BioGeneratorProps>(
	({ player, onBioGenerated }, ref) => {
		const [jobId, setJobId] = useState<string | null>(null);
		const [bio, setBio] = useState<string | null>(null);
		const [status, setStatus] = useState<
			"IDLE" | "PENDING" | "COMPLETED" | "FAILED"
		>("IDLE");
		const [error, setError] = useState<string | null>(null);

		useImperativeHandle(ref, () => ({
			renew: () => {
				setBio(null);
				handleGenerate();
			},
		}));

		const handleGenerate = async () => {
			try {
				setStatus("PENDING");
				setError(null);
				const id = await generateBio(player);
				setJobId(id);
			} catch (err) {
				setStatus("FAILED");
				setError("Failed to start generation. Please try again.");
				console.error("Bio generation start error:", err);
			}
		};

		useEffect(() => {
			let intervalId: ReturnType<typeof setInterval>;

			if (jobId && status === "PENDING") {
				intervalId = setInterval(async () => {
					try {
						const job = await getBioStatus(jobId);
						if (job.status === "COMPLETED") {
							setBio(job.result || "");
							setStatus("COMPLETED");
							setJobId(null);
							onBioGenerated?.();
						} else if (job.status === "FAILED") {
							setStatus("FAILED");
							setError("Bio generation failed on server.");
							setJobId(null);
						}
					} catch (err) {
						console.error("Polling error:", err);
					}
				}, 2000);
			}

			return () => {
				if (intervalId) clearInterval(intervalId);
			};
		}, [jobId, status, onBioGenerated]);

		if (status === "COMPLETED" && bio) {
			return (
				<div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
					<h3 className="text-lg font-semibold text-gray-800 mb-3">
						AI Analysis
					</h3>
					<p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
						{bio}
					</p>
				</div>
			);
		}

		return (
			<div className="mt-8 flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
				{status === "IDLE" && (
					<button
						type="button"
						onClick={handleGenerate}
						className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2"
					>
						<span>✨</span> Generate AI Bio
					</button>
				)}

				{status === "PENDING" && (
					<div className="text-center">
						<div className="inline-block w-8 h-8 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-3" />
						<p className="text-gray-600 font-medium">
							Generating player analysis...
						</p>
						<p className="text-sm text-gray-400 mt-1">
							This uses sophisticated AI models
						</p>
					</div>
				)}

				{status === "FAILED" && (
					<div className="text-center">
						<p className="text-red-600 mb-3 font-medium">
							{error || "Something went wrong"}
						</p>
						<button
							type="button"
							onClick={handleGenerate}
							className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
						>
							Try Again
						</button>
					</div>
				)}
			</div>
		);
	},
);

BioGenerator.displayName = "BioGenerator";
