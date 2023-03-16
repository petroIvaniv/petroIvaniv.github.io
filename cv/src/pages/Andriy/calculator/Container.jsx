import {useState} from "react";
import FirstAction from './FirstAction'
import SecondAction from './SecondAction'
import ThirtyAction from './ThirtyAction'
const Container=()=>{
    const [number,setNumber]=useState(3);
    const plusMinus = (action)=>{
        const newAct = action==='plus'?number+1:number-1;
        setNumber(newAct);
    }
    const multiplyDivide = (action)=>{
        const newAct = action==='multiply'?number * 2:number / 2;
        setNumber(newAct);
    }
    return <div>
        <h1>{number}</h1>
        <FirstAction plusMinus={plusMinus}/>
        <SecondAction plusMinus={plusMinus}/>
        <ThirtyAction multiplyDivide={multiplyDivide}/>
    </div>
}
export default Container;