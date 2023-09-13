import logo from "../../assets/images/logo-white.png";
import Button from "../Button";

function HeroSection() {
  return (
    <header
      className="clip w-full h-[95vh] leading-[170%] text-white  bg-hero-bg 
	bg-cover bg-top flex  justify-center items-center flex-col mb-20 relative"
    >
      <img
        className="absolute top-[4.8rem] left-[4.8rem] max-w-[8.2rem]"
        src={logo}
        alt="logo image"
      />
      <h1 className="animate-[fadeInLeft_1s_ease-in-out] text-2xl leading-[170%] tracking-[35px] uppercase">
        Outdoors
      </h1>
      <p className="animate-[fadeInRight_1s_ease-in-out] text-base font-bold leading-[170%] uppercase tracking-[21px] mb-[7.22rem]">
        is where life happens
      </p>
      <Button
        animation="animate-[fadeUp_.4s_ease-in-out_.8s_forwards]"
        textColor="text-gray"
        title="discover our tours"
        bgColor="bg-white"
        href=""
      />
    </header>
  );
}

export default HeroSection;
