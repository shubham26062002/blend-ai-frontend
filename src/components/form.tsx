"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FileUploaderMinimal } from "@uploadcare/react-uploader/next"
import "@uploadcare/react-uploader/core.css"
import { TbLoader2 } from "react-icons/tb"
import { MdErrorOutline } from "react-icons/md"
import { useState, useEffect } from "react"
import axios from "axios"

import { useToast } from "@/hooks/use-toast"
import { useModal } from "@/hooks/use-modal"

const formSchema = z.object({
    contentImageUrl: z.string().min(1, {
        message: "Content image is required.",
    }),
    styleImageUrl: z.string().min(1, {
        message: "Style image is required.",
    }),
})

export const Form = () => {
    const { set } = useToast()

    const [resultImageUrl, setResultImageUrl] = useState<string>("")

    const { handleOpen } = useModal()

    const [isMounted, setIsMounted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contentImageUrl: "",
            styleImageUrl: "",
        },
        mode: "onChange",
    })

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/api/blend`, {
                content_image_url: data.contentImageUrl,
                style_image_url: data.styleImageUrl,
            })

            console.log(response)

            handleOpen("preview-modal", {
                resultImageUrl: "/images/fruit.jpg",
            })

            return setResultImageUrl("/images/fruit.jpg")
        } catch (error) {
            console.error(error)

            return set("An unknown error occurred. Please try again later.")
        }
    })

    useEffect(() => {
        setIsMounted(true)
    }, [setIsMounted])

    if (!isMounted) {
        return null
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-[20rem] space-y-4">
                    <label className="block mx-auto w-fit uppercase tracking-widest font-medium text-xs text-zinc-500" htmlFor="contentImageUrl">Content image</label>
                    <FileUploaderMinimal classNameUploader="uc-light uc-purple" pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY!} imgOnly multiple={false} onChange={(event) => {
                        const contentImageUrl = event.allEntries.filter((item) => item.status === "success")[0]?.cdnUrl

                        return form.setValue("contentImageUrl", contentImageUrl!)
                    }} />

                    {form.formState.errors.contentImageUrl?.message && (
                        <div className="text-sm text-rose-600 gap-x-1 flex items-center w-fit mx-auto">
                            <MdErrorOutline className="size-5" />
                            {form.formState.errors.contentImageUrl.message}
                        </div>
                    )}

                </div>
                <div className="w-[20rem] space-y-4">
                    <label className="block mx-auto w-fit uppercase tracking-widest font-medium text-xs text-zinc-500" htmlFor="styleImageUrl">Style image</label>
                    <FileUploaderMinimal classNameUploader="uc-light uc-purple" pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY!} imgOnly multiple={false} onChange={(event) => {
                        const styleImageUrl = event.allEntries.filter((item) => item.status === "success")[0]?.cdnUrl

                        return form.setValue("styleImageUrl", styleImageUrl!)
                    }} />

                    {form.formState.errors.styleImageUrl?.message && (
                        <div className="text-sm text-rose-600 gap-x-1 flex items-center w-fit mx-auto">
                            <MdErrorOutline className="size-5" />
                            {form.formState.errors.styleImageUrl.message}
                        </div>
                    )}

                </div>
            </div>
            <button className="h-12 px-5 mx-auto block text-sm font-medium rounded-xl text-white bg-violet-500 hover:bg-violet-500/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none" disabled={form.formState.isSubmitting}>

                {form.formState.isSubmitting ? (
                    <TbLoader2 className="size-5 animate-spin transition-transform" />
                ) :
                    "Generate"
                }

            </button>

            {!!resultImageUrl && (
                <button className="h-12 px-5 mx-auto block text-sm font-medium rounded-xl text-zinc-600 hover:bg-black/5 transition-colors" onClick={() => handleOpen("preview-modal", {
                    resultImageUrl,
                })} type="button">View preview</button>
            )}

        </form>
    )
}
