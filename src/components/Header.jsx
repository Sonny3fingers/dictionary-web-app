import React from "react";
import logoIcon from "../assets/png/dictionaryLogo.png";
import DarkModeLogo from "../assets/png/darkModeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

function Header({ darkMode, darkModeHandler, selectFontFamilyHandler }) {
  const changeFontStyle = (e) => {
    selectFontFamilyHandler(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-10 h-10 md:w-16 md:h-16 hover:cursor-pointer">
        <img
          src={darkMode ? DarkModeLogo : logoIcon}
          alt="logo"
          className="w-full"
        />
      </div>
      <div className="flex">
        <select
          name="font"
          id="font"
          className="font-bold px-1 mx-2 text-neutral-600 border-0 outline-none cursor-pointer md:text-xl dark:bg-gray-800 dark:text-zinc-50"
          onChange={changeFontStyle}
        >
          <option value="serif">Serif</option>
          <option value="sans">Sans</option>
          <option value="mono">Mono</option>
        </select>
        <div className="w-1 border-r-2 border-solid border-gray-200 md:mx-3"></div>
        <input
          type="range"
          min="0"
          max="1"
          step="1"
          className="w-8 mx-3 md:w-10"
          onChange={darkModeHandler}
          value={darkMode ? 1 : 0}
        />
        <span>
          <FontAwesomeIcon
            icon={darkMode ? faMoon : faSun}
            className="text-xl text-neutral-600 md:text-2xl md:ml-4"
          />
        </span>
      </div>
    </div>
  );
}

export default Header;
