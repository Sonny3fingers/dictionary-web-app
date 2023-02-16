import React from "react";
import logoIcon from "../assets/png/dictionaryLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-10 h-10">
        <img src={logoIcon} alt="logo" />
      </div>
      <div className="flex">
        <form className="flex items-center">
          <select
            name="font"
            id="font"
            className="font-bold px-1 mx-2 text-neutral-600 border-0 outline-none"
          >
            <option value="Serif">Serif</option>
            <option value="Sans">Sans</option>
            <option value="Mono">Mono</option>
          </select>
          <input
            type="range"
            min="0"
            max="1"
            className="w-10 px-1 mx-2 text-gray-500"
          />
          <span>
            <FontAwesomeIcon
              icon={faMoon}
              className="text-xl text-neutral-600"
            />
          </span>
        </form>
        {/* <form className="w-4"></form> */}
      </div>
    </div>
  );
}

export default Header;
