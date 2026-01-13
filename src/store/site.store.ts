import { create } from "zustand";

interface SiteState {
	selectedSiteName: string | null;
	setSelectedSiteName: (name: string) => void;
}

export const useSiteStore = create<SiteState>((set) => ({
	selectedSiteName: "all",
	setSelectedSiteName: (name) => set({ selectedSiteName: name }),
}));
