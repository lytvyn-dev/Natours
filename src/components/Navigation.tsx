import { Fragment } from "react";

function Navigation() {
  return (
    <Fragment>
      <input className="toggle-nav hidden" type="checkbox" name="navigation" id="navigation" />
      <label
        className="fixed top-28 right-28 h-[7rem] w-[7rem] bg-white rounded-full z-[1001] cursor-pointer"
        htmlFor="navigation"
      ></label>

      <div className="backdrop fixed top-28 right-28 h-[6.5rem] rounded-full w-[6.5rem] z-[1005] bg-menu"></div>

      <nav className="nav z-[1002]">
        <ul className="flex flex-col items-center gap-y-4 text-5xl text-white font-light">
          <li>
            <a
              className="inline-block bg-navigation bg-[length:220%] hover:bg-[100%] py-4 px-8 hover:text-primaryGreen transition-all duration-300"
              href="#"
            >
              <span className="mr-4">01</span>About natous
            </a>
          </li>
          <li>
            <a
              className="inline-block bg-navigation bg-[length:220%] hover:bg-[100%] py-4 px-8 hover:text-primaryGreen transition-all duration-300"
              href="#"
            >
              <span className="mr-4">02</span>Your benefits
            </a>
          </li>
          <li>
            <a
              className="inline-block bg-navigation bg-[length:220%] hover:bg-[100%] py-4 px-8 hover:text-primaryGreen transition-all duration-300"
              href="#"
            >
              <span className="mr-4">03</span>Popular tours
            </a>
          </li>
          <li>
            <a
              className="inline-block bg-navigation bg-[length:220%] hover:bg-[100%] py-4 px-8 hover:text-primaryGreen transition-all duration-300"
              href="#"
            >
              <span className="mr-4">04</span>Stories
            </a>
          </li>
          <li>
            <a
              className="inline-block bg-navigation bg-[length:220%] hover:bg-[100%] py-4 px-8 hover:text-primaryGreen transition-all duration-300"
              href="#"
            >
              <span className="mr-4">05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navigation;
