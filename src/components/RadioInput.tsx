import { Fragment } from "react";

interface RadioProps {
  id: string;
  name: string;
  label: string;
}

function RadioInput({ id, name, label }: RadioProps) {
  return (
    <Fragment>
      <input className="check-input" checked type="radio" name={name} id={id} />
      <label
        className="text-gray text-[1.9rem] leading-[170%] cursor-pointer relative pl-[50px]"
        htmlFor={id}
      >
        <span className="w-[36px] h-[36px] border-[5px] border-primaryGreen rounded-full absolute top-50% left-0 after:w-[20px] after:h-[20px] after:absolute after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primaryGreen after:opacity-0"></span>
        {label}
      </label>
    </Fragment>
  );
}

export default RadioInput;
