import VideoHighligh from "../../Video/VideoHighligh.mp4"

const Video = () => {
  return (
    <div className="h-full w-full">
      <video autoPlay loop muted className="h-full w-full object-cover" src={VideoHighligh}></video>
    </div>
  )
}

export default Video
