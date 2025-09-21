import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const ImageArr=[
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg'
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: `top 10%`,
        
        end: `top -178%`,
        
        pin: true,
        onUpdate:function(){
          console.log("check")
        }
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className=" absolute h-[20vw] overflow-hidden rounded-4xl w-[15vw] top-[158px] left-[30vw] "
        >
          <img
          ref={imageRef}
            className=" h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="font-[font2] relative text-white">
          <div className="mt-[54vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Sixty- <br /> seventh <br />
              Twelve
            </h1>
          </div>
          <div className="ml-[41%] w-[50%] flex mt-20">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. It has values, a personality, a story. If we forget that, we may make good numbers in the short term, but we'll kill it in the long term. That's why we're committed to providing perspective, to building influential brands.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
