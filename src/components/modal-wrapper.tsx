"use client"

import { useModal } from "@/hooks/use-modal"
import { cn } from "@/lib/cn"

type ModalWrapperProps = {
    children: React.ReactNode,
    containerClassName?: string,
    isOpen: boolean,
}

export const ModalWrapper = ({
    children,
    containerClassName = "",
    isOpen,
}: ModalWrapperProps) => {
    const { handleClose } = useModal()

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/5" onClick={handleClose}>
            <div className={cn("w-full md:max-w-2xl py-8 px-6 bg-white md:rounded-2xl border border-black/5 shadow-lg shadow-black/5", containerClassName)} onClick={(event) => event.stopPropagation()}>{children}</div>
        </div>
    )
}
