import yaryna from "../yaryna.module.scss";

const ThirdAction = ({multiplyDivide }) => (
  <div className={yaryna.btns}>
    <button className={yaryna.btnMultiply} onClick={() => multiplyDivide("multiply")}>* 2</button>
    <button className={yaryna.btnDivide} onClick={() => multiplyDivide("divide")}>/ 2</button>
  </div>
);

export default ThirdAction;