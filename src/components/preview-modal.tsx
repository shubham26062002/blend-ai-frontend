"use client"

import Image from "next/image"
import { MdOutlineFileDownload } from "react-icons/md"
import { IoMdClose } from "react-icons/io"

import { useModal } from "@/hooks/use-modal"
import { ModalWrapper } from "@/components/modal-wrapper"

export const PreviewModal = () => {
    const { isOpen, type, data, handleClose } = useModal()

    return (
        <ModalWrapper isOpen={isOpen && type === "preview-modal"} containerClassName="space-y-6">
            <h1 className="text-2xl font-semibold text-zinc-700">Preview</h1>
            <div className="aspect-video rounded-xl relative overflow-hidden">
                <Image className="size-full object-cover" src={data.resultImageUrl!} alt="Preview image" fill priority quality={100} loading="eager" />
            </div>
            <div className="border-b border-b-black/10 border-dashed" />
            <div className="flex items-center justify-between">
                <button className="text-sm font-medium gap-x-2 flex items-center h-10 px-4 rounded-lg text-zinc-700 hover:bg-black/5 transition-colors" onClick={handleClose}>
                    <IoMdClose className="size-5" />
                    Close
                </button>
                <a className="text-sm font-medium gap-x-2 flex items-center h-10 px-4 rounded-lg bg-violet-600 text-white hover:bg-violet-600/80 transition-colors" href={data.resultImageUrl!} download>
                    Download
                    <MdOutlineFileDownload className="size-5" />
                </a>
            </div>
        </ModalWrapper>
    )
}
