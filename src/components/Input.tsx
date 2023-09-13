interface InputProps {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
}

function Input({ id, type, label, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input className="input" type={type} id={id} placeholder={placeholder} required />
      <label className="text-[1.2rem] font-bold pl-[2.4rem] transition-all" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Input;
