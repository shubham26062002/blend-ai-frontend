"use client"

import { useRouter } from "next/navigation"
import { GrDocument } from "react-icons/gr"
import { IoMdHelp } from "react-icons/io"

import { Logo } from "@/components/logo"

export const Header = () => {
    const router = useRouter()

    return (
        <header className="py-3 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b border-b-black/5">
            <Logo className="flex-shrink-0" />
            <div className="flex h-10 gap-x-3">
                <div className="flex gap-x-0.5">
                    <button className="w-10 lg:w-auto flex items-center justify-center gap-x-2 lg:px-4 rounded-lg text-sm font-medium text-zinc-700 hover:bg-black/5 transition-colors" onClick={() => router.push("/docs")}>
                        <GrDocument className="size-5 flex-shrink-0" />
                        <p className="hidden lg:block">Docs</p>
                    </button>
                    <button className="w-10 lg:w-auto flex items-center justify-center gap-x-2 lg:px-4 rounded-lg text-sm font-medium text-zinc-700 hover:bg-black/5 transition-colors" onClick={() => router.push("/help")}>
                        <IoMdHelp className="size-5 flex-shrink-0" />
                        <p className="hidden lg:block">Help</p>
                    </button>
                </div>
                <button className="text-sm font-medium px-4 rounded-lg text-white bg-violet-500 hover:bg-violet-500/90 transition-colors" onClick={() => document.getElementById("main-feature")?.scrollIntoView({
                    behavior: "smooth",
                })}>Get started</button>
            </div>
        </header>
    )
}
