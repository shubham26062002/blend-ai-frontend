"use client"

import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { FaChevronDown } from "react-icons/fa6"

export const Banner = () => {
    const [isMounted, setIsMounted] = useState(false)

    const isTablet = useMediaQuery({
        query: "(min-width: 768px)",
    })

    const isDesktop = useMediaQuery({
        query: "(min-width: 1024px)",
    })

    useEffect(() => {
        setIsMounted(true)
    }, [setIsMounted])

    if (!isMounted) {
        return null
    }

    if (isDesktop) {
        return (
            <div className="overflow-hidden p-2.5 h-96 relative">
                <motion.div
                    className="h-full flex w-[200%] gap-x-2.5"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        repeatDelay: 0,
                    }}
                >
                    <div className="flex-grow grid grid-cols-8 gap-2.5">
                        <div className="relative rounded-lg overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2">
                            <Image className="size-full object-cover" src="/images/desert.jpg" alt="Grid image 1" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-4 row-start-1 row-end-3 relative rounded-xl overflow-hidden">
                            <Image className="size-full object-cover" src="/images/idol.jpg" alt="Grid image 2" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-4 col-end-5 row-start-1 row-end-3 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/boy.jpg" alt="Grid image 3" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-6 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/car.jpg" alt="Grid image 4" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-6 col-end-7 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/tiger.jpg" alt="Grid image 5" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-7 col-end-9 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/fruit.jpg" alt="Grid image 6" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-7 col-end-8 row-start-2 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/building.jpg" alt="Grid image 7" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-1 col-end-2 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/water.jpg" alt="Grid image 8" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-7 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/gate.jpg" alt="Grid image 9" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-3 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/plane.jpg" alt="Grid image 10" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-8 col-end-9 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/castle.jpg" alt="Grid image 11" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-7 col-end-8 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/gun.jpg" alt="Grid image 12" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-3 col-end-5 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/family.jpg" alt="Grid image 13" fill quality={100} loading="eager" priority />
                        </div>
                    </div>
                    <div className="flex-grow grid grid-cols-8 gap-2.5">
                        <div className="relative rounded-lg overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2">
                            <Image className="size-full object-cover" src="/images/desert.jpg" alt="Grid image 1" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-4 row-start-1 row-end-3 relative rounded-xl overflow-hidden">
                            <Image className="size-full object-cover" src="/images/idol.jpg" alt="Grid image 2" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-4 col-end-5 row-start-1 row-end-3 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/boy.jpg" alt="Grid image 3" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-6 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/car.jpg" alt="Grid image 4" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-6 col-end-7 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/tiger.jpg" alt="Grid image 5" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-7 col-end-9 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/fruit.jpg" alt="Grid image 6" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-7 col-end-8 row-start-2 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/building.jpg" alt="Grid image 7" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-1 col-end-2 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/water.jpg" alt="Grid image 8" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-7 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/gate.jpg" alt="Grid image 9" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-3 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/plane.jpg" alt="Grid image 10" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-8 col-end-9 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/castle.jpg" alt="Grid image 11" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-7 col-end-8 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/gun.jpg" alt="Grid image 12" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-3 col-end-5 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/family.jpg" alt="Grid image 13" fill quality={100} loading="eager" priority />
                        </div>
                    </div>
                </motion.div>
                <div className="absolute inset-0 flex flex-col gap-y-8 items-center px-6 md:px-12 lg:px-24 justify-center bg-gradient-to-b from-black/0 to-black">
                    <h1 className="text-3xl font-semibold text-white text-center">Art meets algorithm – your photos, reimagined.</h1>
                    <button className="h-12 px-5 text-sm font-medium text-white rounded-xl bg-black/90 hover:bg-black/75 transition-colors flex items-center gap-x-2" onClick={() => document.getElementById("main-feature")?.scrollIntoView({
                        behavior: "smooth",
                    })}>
                        Get started
                        <FaChevronDown className="size-5" />
                    </button>
                </div>
            </div>
        )
    }

    if (isTablet) {
        return (
            <div className="overflow-hidden p-2.5 h-96 relative">
                <motion.div
                    className="h-full flex w-[200%] gap-x-2.5"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        repeatDelay: 0,
                    }}
                >
                    <div className="flex-grow grid grid-cols-6 gap-2.5">
                        <div className="relative rounded-lg overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2">
                            <Image className="size-full object-cover" src="/images/desert.jpg" alt="Grid image 1" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-4 row-start-1 row-end-3 relative rounded-xl overflow-hidden">
                            <Image className="size-full object-cover" src="/images/idol.jpg" alt="Grid image 2" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-4 col-end-5 row-start-1 row-end-3 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/boy.jpg" alt="Grid image 3" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-6 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/car.jpg" alt="Grid image 4" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-6 col-end-7 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/tiger.jpg" alt="Grid image 5" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-1 col-end-2 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/water.jpg" alt="Grid image 6" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-7 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/gate.jpg" alt="Grid image 7" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-3 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/plane.jpg" alt="Grid image 8" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-3 col-end-5 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/family.jpg" alt="Grid image 9" fill quality={100} loading="eager" priority />
                        </div>
                    </div>
                    <div className="flex-grow grid grid-cols-6 gap-2.5">
                        <div className="relative rounded-lg overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2">
                            <Image className="size-full object-cover" src="/images/desert.jpg" alt="Grid image 1" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-4 row-start-1 row-end-3 relative rounded-xl overflow-hidden">
                            <Image className="size-full object-cover" src="/images/idol.jpg" alt="Grid image 2" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-4 col-end-5 row-start-1 row-end-3 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/boy.jpg" alt="Grid image 3" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-6 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/car.jpg" alt="Grid image 4" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-6 col-end-7 row-start-1 row-end-2 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/tiger.jpg" alt="Grid image 5" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-1 col-end-2 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/water.jpg" alt="Grid image 6" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-5 col-end-7 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/gate.jpg" alt="Grid image 7" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-2 col-end-3 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/plane.jpg" alt="Grid image 8" fill quality={100} loading="eager" priority />
                        </div>
                        <div className="col-start-3 col-end-5 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                            <Image className="size-full object-cover" src="/images/family.jpg" alt="Grid image 9" fill quality={100} loading="eager" priority />
                        </div>
                    </div>
                </motion.div>
                <div className="px-6 md:px-12 lg:px-24 absolute inset-0 flex flex-col gap-y-8 items-center justify-center bg-gradient-to-b from-black/0 to-black">
                    <h1 className="text-3xl font-semibold text-white text-center">Art meets algorithm – your photos, reimagined.</h1>
                    <button className="h-12 px-5 text-sm font-medium text-white rounded-xl bg-black/90 hover:bg-black/75 transition-colors flex items-center gap-x-2" onClick={() => document.getElementById("main-feature")?.scrollIntoView({
                        behavior: "smooth",
                    })}>
                        Get started
                        <FaChevronDown className="size-5" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="overflow-hidden p-2.5 h-96 relative">
            <motion.div
                className="h-full flex w-[200%] gap-x-2.5"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    repeatDelay: 0,
                }}
            >
                <div className="flex-grow grid grid-cols-4 gap-2.5">
                    <div className="relative rounded-lg overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2">
                        <Image className="size-full object-cover" src="/images/desert.jpg" alt="Grid image 1" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-2 col-end-4 row-start-1 row-end-3 relative rounded-xl overflow-hidden">
                        <Image className="size-full object-cover" src="/images/idol.jpg" alt="Grid image 2" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-4 col-end-5 row-start-1 row-end-3 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/boy.jpg" alt="Grid image 3" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-1 col-end-2 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/water.jpg" alt="Grid image 4" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-2 col-end-3 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/plane.jpg" alt="Grid image 5" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-3 col-end-5 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/family.jpg" alt="Grid image 6" fill quality={100} loading="eager" priority />
                    </div>
                </div>
                <div className="flex-grow grid grid-cols-4 gap-2.5">
                    <div className="relative rounded-lg overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2">
                        <Image className="size-full object-cover" src="/images/desert.jpg" alt="Grid image 1" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-2 col-end-4 row-start-1 row-end-3 relative rounded-xl overflow-hidden">
                        <Image className="size-full object-cover" src="/images/idol.jpg" alt="Grid image 2" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-4 col-end-5 row-start-1 row-end-3 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/boy.jpg" alt="Grid image 3" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-1 col-end-2 row-start-2 row-end-4 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/water.jpg" alt="Grid image 4" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-2 col-end-3 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/plane.jpg" alt="Grid image 5" fill quality={100} loading="eager" priority />
                    </div>
                    <div className="col-start-3 col-end-5 row-start-3 row-end-4 relative rounded-lg overflow-hidden">
                        <Image className="size-full object-cover" src="/images/family.jpg" alt="Grid image 6" fill quality={100} loading="eager" priority />
                    </div>
                </div>
            </motion.div>
            <div className="absolute inset-0 flex flex-col gap-y-8 px-6 md:px-12 lg:px-24 items-center justify-center bg-gradient-to-b from-black/0 to-black">
                <h1 className="text-3xl font-semibold text-white text-center">Art meets algorithm – your photos, reimagined.</h1>
                <button className="h-12 px-5 text-sm font-medium text-white rounded-xl bg-black/90 hover:bg-black/75 transition-colors flex items-center gap-x-2" onClick={() => document.getElementById("main-feature")?.scrollIntoView({
                    behavior: "smooth",
                })}>
                    Get started
                    <FaChevronDown className="size-5" />
                </button>
            </div>
        </div>
    )
}
