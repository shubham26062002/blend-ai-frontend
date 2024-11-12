import Link from "next/link"
import { Space_Grotesk } from "next/font/google"

import { cn } from "@/lib/cn"

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
})

type LogoProps = {
    className?: string,
}

export const Logo = ({
    className = "",
}: LogoProps) => {
    return (
        <Link className={cn("text-[1.75rem] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-violet-600 block w-fit", spaceGrotesk.className, className)} href="/">BlendAI.</Link>
    )
}
