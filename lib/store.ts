import { create } from 'zustand';

interface UIState {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    activeAlertsCount: number;
    setActiveAlertsCount: (count: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
    isSidebarOpen: true,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    activeAlertsCount: 0,
    setActiveAlertsCount: (count) => set({ activeAlertsCount: count }),
}));
