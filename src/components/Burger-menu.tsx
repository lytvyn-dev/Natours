function BurgerMenu() {
  return (
    <>
      <input className="toggle-nav hidden" type="checkbox" name="navigation" id="navigation" />
      <label
        className="fixed top-28 right-28 h-[7rem] w-[7rem] bg-white shadow-xl rounded-full z-[1002] cursor-pointer"
        htmlFor="navigation"
      >
        <span className="w-[3rem] h-[0.2rem] bg-[#000] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 after:w-[3rem] after:h-[0.2rem] after:bg-[#000] after:absolute after:top-[-0.7rem] after:left-[50%] after:-translate-x-1/2 after:-translate-y-1/2 before:w-[3rem] before:h-[0.2rem] before:bg-[#000] before:absolute before:top-[0.7rem] before:left-[50%] before:-translate-x-1/2 before:translate-y-1/2 transition-all"></span>
      </label>
      <div className="backdrop transition-transform ease-linear duration-500 fixed top-[7.5rem] right-[7.5rem] h-[6rem] w-[6rem] rounded-full  z-[1001] bg-menu"></div>
    </>
  );
}

export default BurgerMenu;
