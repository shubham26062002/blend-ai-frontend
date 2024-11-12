"use client"

import Link from "next/link"

import { Logo } from "@/components/logo"

export const Footer = () => {
    return (
        <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-t-black/5 space-y-4">
            <Logo className="flex-shrink-0 mx-auto" />
            <div className="flex items-center justify-center gap-x-5">
                <Link className="text-sm font-medium text-violet-600 hover:text-violet-600/80 underline-offset-2 underline transition-colors" href="/docs">Docs</Link>
                <Link className="text-sm font-medium text-violet-600 hover:text-violet-600/80 underline-offset-2 underline transition-colors" href="/help">Help</Link>
                <button className="text-sm font-medium text-violet-600 hover:text-violet-600/80 underline-offset-2 underline transition-colors" onClick={() => document.getElementById("main-feature")?.scrollIntoView({
                    behavior: "smooth",
                })}>Get started</button>
            </div>
            <p className="text-xs text-center text-zinc-500">&copy; Shubham Patel's development, All rights reserved.</p>
        </footer>
    )
}
