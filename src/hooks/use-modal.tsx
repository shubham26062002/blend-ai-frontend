import { create } from "zustand"

type ModalType = "preview-modal"

type ModalData = {
    resultImageUrl?: string,
}

type ModalStore = {
    isOpen: boolean,
    type: ModalType | null,
    data: ModalData,
    handleOpen: (type: ModalType, data: ModalData) => void,
    handleClose: () => void,
}

export const useModal = create<ModalStore>((set) => ({
    isOpen: false,
    type: null,
    data: {},
    handleOpen: (type, data) => set({
        isOpen: true,
        type,
        data,
    }),
    handleClose: () => set({
        isOpen: false,
        type: null,
        data: {},
    }),
}))