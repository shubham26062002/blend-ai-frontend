import { Metadata } from "next"
import { Sora } from "next/font/google"

import { cn } from "@/lib/cn"
import "@/app/globals.css"
import { ModalsProvider } from "@/components/providers/modals-provider"
import { Toast } from "@/components/toast"

const sora = Sora({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BlendAI",
}

type RootLayoutProps = {
  children: React.ReactNode,
}

const RootLayout = ({
  children,
}: RootLayoutProps) => {
  return (
    <html className={cn("h-full text-sm lg:text-base antialiased", sora.className)} lang="en">
      <body className="h-full antialiased min-w-[360px] max-w-screen-2xl mx-auto 2xl:border-x 2xl:border-x-black/5">
        <ModalsProvider />
        <Toast />
        {children}
      </body>
    </html>
  )
}

export default RootLayout