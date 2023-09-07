import Button from "./Button";

interface CardProps {
  title: string;
  backBg: string;
  frontBg: string;
  price: string;
  text: {
    difficulty: string;
    sleep: string;
    guides: number;
    peoples: number;
    days: number;
  };
}

const RotatingCard = (props: CardProps) => {
  return (
    <article className="flipper flex-1 h-[52rem]">
      <div className="front bg-white absolute top-0 left-0 w-full">
        <header className={`relative h-[23rem] clip ${props.frontBg} bg-blend-screen bg-cover`}>
          <h3 className="text-[2.8rem] uppercase text-white absolute bottom-20 right-8 text-right w-[75%]">
            <span className="text-decoration">{props.title}</span>
          </h3>
        </header>
        <ul className="  text-[1.8rem] p-[3rem] text-center ">
          <li className="p-[1rem] border-b-2 border-b-[#eee] last:border-b-0">
            {props.text.days} day's tours
          </li>
          <li className="p-[1rem] border-b-2 border-b-[#eee] last:border-b-0">
            Up to {props.text.peoples} people
          </li>
          <li className="p-[1rem] border-b-2 border-b-[#eee] last:border-b-0">
            {props.text.guides} tour guides
          </li>
          <li className="p-[1rem] border-b-2 border-b-[#eee] last:border-b-0">
            Sleep in {props.text.sleep}
          </li>
          <li className="p-[1rem] border-b-2 border-b-[#eee] last:border-b-0">
            Difficulty: {props.text.difficulty}
          </li>
        </ul>
      </div>
      <div
        className={`back absolute w-full h-full ${props.backBg}  flex flex-col justify-center items-center gap-y-[95px]`}
      >
        <div className="text-white font-thin flex flex-col items-center">
          <p className="text-[1.6rem]">only</p>
          <p className="text-[6rem] uppercase">${props.price}</p>
        </div>

        <Button title="Book now" textColor="gray" bgColor="white" />
      </div>
    </article>
  );
};

export default RotatingCard;
