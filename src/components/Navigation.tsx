import { Fragment } from "react";
import BurgerMenu from "./Burger-menu";

function Navigation() {
  return (
    <Fragment>
      <BurgerMenu />

      <nav className="nav z-[1002]">
        <ul className="flex flex-col items-center gap-y-4 text-[3.6rem] text-white font-light">
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
