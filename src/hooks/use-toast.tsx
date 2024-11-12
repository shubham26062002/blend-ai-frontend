import { create } from "zustand"

type ToastStore = {
    message: string,
    type?: "success" | "error",
    set: (message: string, type?: "success" | "error") => void,
    clear: () => void,
}

export const useToast = create<ToastStore>((set) => ({
    message: "",
    type: "error",
    set: (message, type = "error") => set(() => ({
        message,
        type,
    })),
    clear: () => set(() => ({
        message: "",
    })),
}))