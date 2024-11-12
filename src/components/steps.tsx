export const Steps = () => {
    const stepsData: {
        title: string,
        description: string,
    }[] = [
            {
                title: "Upload \"Content image\"",
                description: "Upload the image you want to apply the style to.",
            },
            {
                title: "Upload \"Style image\"",
                description: "Upload the image you want to take the style from.",
            },
            {
                title: "Apply style",
                description: "Click the button and wait for the magic to happen.",
            },
            {
                title: "Download image",
                description: "Download the image with the style applied.",
            },
        ]

    return (
        <div className="py-8 px-6 md:px-12 lg:px-24 space-y-8">
            <h1 className="text-center font-semibold text-2xl text-zinc-700">How it works?</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                {stepsData.map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="size-28 rounded-full flex items-center justify-center text-4xl font-semibold text-violet-600 border border-violet-600 mx-auto">{index + 1}</div>
                        <h1 className="mt-4 font-medium text-zinc-700">{item.title}</h1>
                        <p className="mt-0.5 text-sm text-zinc-500">{item.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
