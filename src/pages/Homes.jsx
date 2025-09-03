import HomeBottomText from "../components/Home/HomeBottomText"
import HomeHeroText from "../components/Home/HomeHeroText"
import Video from "../components/Home/Video"


const Homes = () => {
  return (
    <div>
    <div className="h-screen w-screen fixed "><Video/></div>
      <div className="h-screen w-screen relative flex flex-col">
        <HomeHeroText/>
        <HomeBottomText/>
      
      </div>
    </div>
  )
}

export default Homes
