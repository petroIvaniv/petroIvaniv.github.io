import {useState} from "react";
import FirstAction from "./FirstAction";
import SecondAction from "./SecondAction";
import ThirdAction from "./ThirdAction";

const Container = () => {
    const [number, setNumber] = useState(3);
    const plusMinus = (action) => {
    const newNum = action === 'plus' ? number + 1 : number - 1
    setNumber(newNum);
  };

const multiplyDivide = (action) => {
    const newNum = action === 'multiply' ? number * 2 : number / 2;
    setNumber(newNum);
  };

  return (
        <>
        <h1>
           {number}
        </h1>
        <FirstAction plusMinus={plusMinus} />
        <br />
        <SecondAction plusMinus={plusMinus} />
        <br />
        <ThirdAction multiplyDivide={multiplyDivide} />
        </>
  );
};
 
export default Container;