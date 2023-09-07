import Button from "../Button";
import RotatingCard from "../RoratingCard";

function PopularTours() {
  return (
    <section className="max-w-[1368px] mx-auto pb-[180px] text-center">
      <h2 className="text-center text-[4.2rem] font-bold leading-[170%] uppercase traching-[2.4px] bg-gradient bg-clip-text text-[transparent] mb-[72px] hover:skew-x-[20deg] hover:scale-105 hover:rotate-2  transition-transform">
        Most popular tours
      </h2>
      <div className="flex justify-between gap-x-[72px] mb-[120px]">
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
      <Button textColor="white" title="discover our tours" bgColor="primaryGreen" />
    </section>
  );
}

export default PopularTours;
