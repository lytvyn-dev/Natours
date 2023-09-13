import CardStory from "../CardStory";
import BgVideo from "../UI/BgVideo";

function Testimonials() {
  return (
    <section className="min-h-[14.33rem] relative flex flex-col gap-y-[12.2rem]">
      <BgVideo
        videoSrc={{
          mp4: "../src/assets/images/video.mp4",
          webm: "../src/assets/images/video.webm",
        }}
      >
        <div className="max-w-[136.68rem] mx-auto relative z-2 flex justify-center items-center flex-col gap-y-[9.6rem] py-[19rem]">
          <h2 className="text-center text-xl font-bold leading-[170%] uppercase traching-[2.4px] bg-gradient bg-clip-text text-[transparent] hover:skew-x-[20deg] hover:scale-105 hover:rotate-2  transition-transform">
            We make people genuinely happy
          </h2>
          <CardStory
            title="I had the best week ever with my family"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
            figCaption="Mary Smith"
            altImage="Mary Smith image"
            imgUrl="../src/assets/images/nat-8.jpg"
          />
          <CardStory
            title="WOW! My life is completely different now"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui."
            figCaption="Jack Wilsons"
            altImage="Jack Wilson image"
            imgUrl="../src/assets/images/nat-9.jpg"
          />
          <a
            href="#"
            className="self-center  text-primaryGreen relative z-2 border-b-2 border-primaryGreen px-2 hover:bg-primaryGreen hover:text-white hover:-translate-y-2 transition-all duration-300 text-base leading-[170%] "
          >
            Read all stories →
          </a>
        </div>
      </BgVideo>
    </section>
  );
}

export default Testimonials;
