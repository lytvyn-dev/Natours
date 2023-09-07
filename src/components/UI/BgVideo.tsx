import { Fragment } from "react";

interface BgVideoProps {
  videoSrc: {
    mp4: string;
    webm: string;
  };
  children?: React.ReactNode;
}

function BgVideo({ videoSrc, children }: BgVideoProps) {
  return (
    <Fragment>
      <video className=" absolute w-full h-full object-cover " muted autoPlay loop>
        <source src={videoSrc.mp4} type="video/mp4" />
        <source src={videoSrc.webm} type="video/webm" />
      </video>
      <div className="absolute w-full h-full bg-[lightgray]/90"></div>
      {children}
    </Fragment>
  );
}

export default BgVideo;
