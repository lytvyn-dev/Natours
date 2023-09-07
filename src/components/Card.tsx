import React from "react";

interface CardProps {
  url: string;
  imgAlt: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <article className="bg-white/80 flex flex-col justify-center items-center p-[25px] pt-[35px] hover:-translate-y-4 hover:scale-105 transition-transform">
      <img className="w-[62px] mb-14" src={props.url} alt={props.imgAlt} />
      <div className="last:mb-0 text-center max-w-[214px] leading-[170%]">
        <p className="text-[1.9rem] font-bold  uppercase mb-[18px]">{props.title}</p>
        <p className="text-[1.8rem] leading-[170%]">{props.text}</p>
      </div>
    </article>
  );
};

export default Card;
