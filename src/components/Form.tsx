import Button from "./Button";
import Input from "./Input";
import RadioInput from "./RadioInput";

function Form() {
  return (
    <form className="w-1/2 h-full p-[72px] pr-0 flex flex-col items-start gap-y-[48px]" action="#">
      <h2 className="text-center text-[4.2rem] font-bold leading-[170%] uppercase traching-[2.4px] bg-gradient bg-clip-text text-[transparent] hover:skew-x-[20deg] hover:scale-105 hover:rotate-2  transition-transform">
        Start booking now
      </h2>
      <div className="flex flex-col gap-y-[56px]">
        <Input label="Full name" type="text" placeholder="Full name" id="name" />
        <Input label="Email address" type="email" placeholder="Email address" id="email" />
      </div>
      <div className="flex gap-x-[73px]">
        <div>
          <RadioInput id="small-group" label="Small tour group" name="tour-group" />
        </div>
        <div>
          <RadioInput id="large-group" label="Large tour group" name="tour-group" />
        </div>
      </div>
      <button className="btn bg-primaryGreen text-white" type="submit">
        Next step →
      </button>
    </form>
  );
}

export default Form;
