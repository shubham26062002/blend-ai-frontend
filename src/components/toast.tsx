"use client"

import { useEffect } from "react"
import { FaCircleCheck } from "react-icons/fa6"
import { MdError } from "react-icons/md"

import { useToast } from "@/hooks/use-toast"

export const Toast = () => {
    const { message, type, clear } = useToast()

    useEffect(() => {
        if (!!message) {
            setTimeout(() => {
                clear()
            }, 5000)
        }
    }, [message, setTimeout, clear])

    if (!message) {
        return null
    }

    return (
        <div className="fixed z-[9999] flex items-center gap-x-2 py-3 px-4 max-w-xl shadow shadow-black/5 rounded-xl border border-black/5 bg-white right-6 bottom-8 text-sm text-zinc-700">

            {type === "error" ? (
                <MdError className="size-5 flex-shrink-0 text-rose-600" />
            ) : (
                <FaCircleCheck className="size-5 flex-shrink-0 text-emerald-600" />
            )}

            <p>{message}</p>
        </div>
    )
}
