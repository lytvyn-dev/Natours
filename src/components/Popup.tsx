import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";

interface PopupProps {
  children: ReactNode;
}

const PopupWindow = (props: PopupProps) => {
  return (
    <>
      <div id="popup" className="popup">
        {props.children}
      </div>
      <div className="backdrop-popup fixed top-0 left-0 w-full h-[100vh] bg-backdrop z-[2000] invisible opacity-0 transition-opacity duration-300 delay-200 "></div>
    </>
  );
};

export default function Popup(props: PopupProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <PopupWindow>{props.children}</PopupWindow>,
        document.getElementById("popup-root")!
      )}
    </Fragment>
  );
}
