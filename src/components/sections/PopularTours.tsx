import Button from "../Button";
import Popup from "../Popup";
import RotatingCard from "../RoratingCard";

function PopularTours() {
  return (
    <section id="section-tours" className="max-w-[136.68rem] mx-auto pb-[18rem] text-center">
      <h2 className="text-center text-xl font-bold leading-[170%] uppercase traching-[2.4px] bg-gradient bg-clip-text text-[transparent] mb-[7.2rem] hover:skew-x-[20deg] hover:scale-105 hover:rotate-2  transition-transform">
        Most popular tours
      </h2>
      <div className="flex justify-between gap-x-[7.2rem] mb-[12rem]">
        <RotatingCard
          title="The sea explorer"
          price="297"
          backBg="bg-orange"
          frontBg="bg-cardOrange"
          text={{ difficulty: "easy", sleep: "cozy hotels", guides: 2, peoples: 30, days: 3 }}
        />
        <RotatingCard
          title="The sea explorer"
          price="497"
          backBg="bg-green"
          frontBg="bg-cardGreen"
          text={{ difficulty: "medium", sleep: "provided tents", guides: 3, peoples: 40, days: 7 }}
        />
        <RotatingCard
          title="Snow Adventurer"
          price="897"
          backBg="bg-blue"
          frontBg="bg-cardBlue"
          text={{ difficulty: "hard", sleep: "provided tents", guides: 6, peoples: 15, days: 5 }}
        />
      </div>
      <Button textColor="text-white" href="" title="discover our tours" bgColor="bg-primaryGreen" />
      <Popup>
        <div className="flex bg-white">
          <div className="basis-1/3 ">
            <img src="/src/assets/images/nat-8.jpg" alt="our tour image" />
            <img src="/src/assets/images/nat-9.jpg" alt="our tour image" />
          </div>
          <div className="relative basis-2/3 px-[5rem] py-[3rem]  flex flex-col items-start justify-center">
            <a
              className="inline-block text-[3rem] absolute top-2 right-5 cursor-pointer"
              href="#section-tours"
            >
              &times;
            </a>
            <h3 className="text-center text-[3.5rem] font-bold leading-[170%] uppercase traching-[2.4px] bg-gradient bg-clip-text text-[transparent] mb-[1.5rem] hover:skew-x-[20deg] hover:scale-105 hover:rotate-2  transition-transform">
              Start booking now
            </h3>
            <h4 className="uppercase text-gray text-sm mb-[1.5rem]">
              IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING
            </h4>
            <p
              style={{ columnRule: "1px solid #eee", columnGap: "4rem", hyphens: "auto" }}
              className=" text-[1.4rem] mb-[4rem] leading-[1.7] columns-2 "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam. Aliquam sem
              et tortor consequat id. Volutpat odio facilisis mauris sit amet massa vitae. Mi
              bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim sit.
              Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque
              elit eget gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta
              non pulvinar neque laoreet. Gravida neque convallis a cras semper. Molestie at
              elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet nec ullamcorper sit
              amet risus nullam eget. Nam libero justo laoreet sit. Amet massa vitae tortor
              condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
              euismod nisi porta.
            </p>
            <Button
              href="#section-tours"
              title="Book now"
              bgColor="bg-primaryGreen"
              textColor="text-white"
            />
          </div>
        </div>
      </Popup>
    </section>
  );
}

export default PopularTours;
