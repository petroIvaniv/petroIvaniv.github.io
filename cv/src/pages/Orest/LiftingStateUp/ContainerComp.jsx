import {useState} from "react";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
const ContainerComp = () => {
    const [num, setNum] = useState(0);
    const math = (word) => {
        const mathAction = word === 'plus' ? num + 1 : num - 1;
        setNum(mathAction);
    }
    return <div>
        <h1>{num}</h1>
        <FirstComp math = {math}/>
        <SecondComp math = {math}/>
    </div>
}

export default ContainerComp;