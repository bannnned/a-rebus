import reb1 from "./assets/reb1.png";
import reb2 from "./assets/reb2.png";
import reb3 from "./assets/reb3.png";
import "./App.css";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router";
import { PATH_PREFIX } from "./constants";
// import { PATH_PREFIX } from './constants'

export const Rebus = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleRedirect = () => {
    navigate(`/${PATH_PREFIX}/${value}`);
    console.log({ value, PATH_PREFIX });
  };

  const handleEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      handleRedirect();
    }
  };

  return (
    <div className="rebus">
      <div className="img-container">
        <img src={reb1} className="img" alt="React logo" />
        <img src={reb2} className="img" alt="React logo" />
        <span className="num">-</span>
        <span className="num">4</span>
        <span className="num">-</span>
        <img src={reb3} className="img" alt="React logo" />
      </div>
      <div className="btns">
        <input
          className="input"
          value={value}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <button onClick={handleRedirect}>Перейти</button>
      </div>
    </div>
  );
};
