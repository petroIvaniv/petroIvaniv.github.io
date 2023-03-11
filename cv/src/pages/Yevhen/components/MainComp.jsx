import React, { useState } from "react";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
import ThirdComp from "./ThirdComp";
import compStyles from "./CompStyles.module.scss";

const MainComp = () => {
  let [number, setNumber] = useState(7);

  const plusMinus = (action) => {
    const value = action === "incr" ? 1 : -1;
    number += value;
    const newNumber = number;
    setNumber(newNumber);
  };

  const multiplyDivide = (action) => {
    const value = action === "multiply" ? number * 2 : number / 2;
    number = value;
    const newNumber = number;
    setNumber(newNumber);
  };

  return (
    <div>
      <h1
        className={
          number >= 0 ? compStyles.positiveNum : compStyles.negativeNum
        }
      >
        {number}
      </h1>
      <FirstComp number={number} plusMinus={plusMinus} />
      <br />
      <SecondComp number={number} plusMinus={plusMinus} />
      <br />
      <ThirdComp number={number} multiplyDivide={multiplyDivide} />
    </div>
  );
};

export default MainComp;
