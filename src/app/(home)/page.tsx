import { Banner } from "@/components/banner"
import { Steps } from "@/components/steps"
import { MainFeature } from "@/components/main-feature"

const HomePage = () => {
  return (
    <>
      <Banner />
      <Steps />
      <div className="px-6 md:px-12 lg:px-24 py-6">
        <div className="border-b border-b-black/10 border-dashed" />
      </div>
      <MainFeature />
    </>
  )
}

export default HomePage