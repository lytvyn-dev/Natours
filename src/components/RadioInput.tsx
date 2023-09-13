import { Fragment } from "react";

interface RadioProps {
  id: string;
  name: string;
  label: string;
}

function RadioInput({ id, name, label }: RadioProps) {
  return (
    <Fragment>
      <input className="check-input" defaultChecked type="radio" name={name} id={id} />
      <label
        className="text-gray text-base leading-[170%] cursor-pointer relative pl-[5rem]"
        htmlFor={id}
      >
        <span className="w-[3.6rem] h-[3.6rem] border-[5px] border-primaryGreen rounded-full absolute top-50% left-0 after:w-[2rem] after:h-[2rem] after:absolute after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-primaryGreen after:opacity-0"></span>
        {label}
      </label>
    </Fragment>
  );
}

export default RadioInput;
