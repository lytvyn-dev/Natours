import DynamicImageScaler from "../UI/DynamicImageScaler";

function ExcitingTours() {
  return (
    <section className="max-w-[1368px] mx-auto mb-[210px]">
      <h2 className="text-center text-[4.2rem] font-bold leading-[170%] uppercase traching-[2.4px] bg-gradient bg-clip-text text-[transparent] mb-[72px] hover:skew-x-[20deg] hover:scale-105 hover:rotate-2  transition-transform">
        Exciting tours for adventurous people
      </h2>
      <div className="flex gap-[72px]">
        <div className="basis-1/2 flex flex-col gap-9 text-[1.9rem] leading-[170%]">
          <div className="flex flex-col gap-4">
            <p className=" font-bold uppercase">You're going to fall in love with nature</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis
              earum qui.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className=" font-bold uppercase">Live adventures like you never have before</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt
              voluptatum nam.
            </p>
          </div>
          <a
            className="self-start text-primaryGreen relative z-2 border-b-2 border-primaryGreen px-2 hover:bg-primaryGreen hover:text-white hover:-translate-y-2 transition-all duration-300 text-[1.9rem] leading-[170%]"
            href="#"
          >
            Learn more &rarr;
          </a>
        </div>
        <DynamicImageScaler
          images={[
            {
              src: "./src/assets/images/nat-1-large.jpg",
              alt: "Nature image",
              top: 0,
              left: 0,
              bottom: undefined,
              right: undefined,
            },
            {
              src: "./src/assets/images/nat-2-large.jpg",
              alt: "Nature image of our tour",
              top: 16,
              right: 0,
              bottom: undefined,
              left: undefined,
            },
            {
              src: "./src/assets/images/nat-3-large.jpg",
              alt: "Image of nature",
              bottom: -350,
              right: 130,
              left: undefined,
              top: undefined,
            },
          ]}
        />
      </div>
    </section>
  );
}

export default ExcitingTours;
