import HomeBottomText from "../components/Home/HomeBottomText"
import HomeHeroText from "../components/Home/HomeHeroText"
import Video from "../components/Home/Video"


const Homes = () => {
  return (
    <div className="text-white">
    <div className="h-full w-screen fixed "><Video/>
    </div>
      <div className="h-full w-full relative flex flex-col">
        <HomeHeroText/>
        <HomeBottomText/>
      
      </div>
    </div>
  )
}

export default Homes
