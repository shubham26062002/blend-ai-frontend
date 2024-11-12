import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type HomeLayoutProps = {
    children: React.ReactNode,
}

const HomeLayout = ({
    children,
}: HomeLayoutProps) => {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}

export default HomeLayout