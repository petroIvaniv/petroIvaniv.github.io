import yaryna from "../yaryna.module.scss";

const FirstAction = ({plusMinus}) => (
    <div className={yaryna.btns}>
        <button className={yaryna.btnPlus} onClick={() => plusMinus("plus")}>+ 1</button>
        <button className={yaryna.btnMinus} onClick={() => plusMinus("minus")}>- 1</button>
    </div>
);

export default FirstAction;