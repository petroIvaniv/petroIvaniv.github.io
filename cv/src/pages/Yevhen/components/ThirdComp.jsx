import compStyles from "./CompStyles.module.scss";

const ThirdComp = ({ number, multiplyDivide }) => (
  <div className={compStyles.btns}>
    <button
      className={compStyles.btnMultiply}
      onClick={() => multiplyDivide("multiply")}
    >
      multiply
    </button>
    <button
      className={compStyles.btnDivide}
      onClick={() => multiplyDivide("divide")}
    >
      divide
    </button>
  </div>
);

export default ThirdComp;
