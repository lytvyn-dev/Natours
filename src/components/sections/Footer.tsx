function Footer() {
  return (
    <footer className="py-[120px] bg-[#333] ">
      <div className="max-w-[1368px] mx-auto flex flex-col gap-y-[104px] text-[#F7F7F7] text-[1.6rem] leading-[170%]">
        <img
          className="w-[150px] self-center"
          src="../src/assets/images/logo-green-1x.png"
          alt=""
        />
        <div className="flex justify-between">
          <ul className="flex gap-x-[21px] uppercase">
            <li className="cursor-pointer hover:scale-125 hover:text-primaryGreen hover:skew-y-[5deg] transition-all hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]">
              <a href="#">Company</a>
            </li>
            <li className="cursor-pointer hover:scale-125 hover:text-primaryGreen hover:skew-y-[5deg] transition-all hover:drop-shadow-xl hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]">
              <a href="#">Contact us</a>
            </li>
            <li className="cursor-pointer hover:scale-125 hover:text-primaryGreen hover:skew-y-[5deg] transition-all hover:drop-shadow-xl hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]">
              <a href="#">Carrers</a>
            </li>
            <li className="cursor-pointer hover:scale-125 hover:text-primaryGreen hover:skew-y-[5deg] transition-all hover:drop-shadow-xl hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]">
              <a href="#">Privacy policy</a>
            </li>
            <li className="cursor-pointer hover:scale-125 hover:text-primaryGreen hover:skew-y-[5deg] transition-all hover:drop-shadow-xl hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.4)]">
              <a href="#">Terms</a>
            </li>
          </ul>
          <p>
            Built by{" "}
            <a className="underline" target="_blank" href="https://github.com/lytvyn-dev">
              Dmytro Lytvyn
            </a>
            . Designed & Copyright © by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
