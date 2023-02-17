import React, { useState } from "react";
import logoIcon from "../assets/png/dictionaryLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeModeHandler = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const changeFontStyle = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-10 h-10">
        <img src={logoIcon} alt="logo" />
      </div>
      <div className="flex">
        <select
          name="font"
          id="font"
          className="font-bold px-1 mx-2 text-neutral-600 border-0 outline-none cursor-pointer"
          onChange={changeFontStyle}
        >
          <option value="Serif">Serif</option>
          <option value="Sans">Sans</option>
          <option value="Mono">Mono</option>
        </select>
        <div className="w-1 border-r-2 border-solid border-gray-200"></div>
        <input
          type="range"
          min="0"
          max="1"
          step="1"
          className="w-8 mx-3"
          onChange={changeModeHandler}
          value={isDarkMode ? 1 : 0}
        />
        <span>
          <FontAwesomeIcon icon={faMoon} className="text-xl text-neutral-600" />
        </span>
      </div>
      {!isDarkMode ? <p>light</p> : <p>dark</p>}
    </div>
  );
}

export default Header;
