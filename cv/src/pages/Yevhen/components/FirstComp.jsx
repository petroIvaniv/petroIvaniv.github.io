import compStyles from "./CompStyles.module.scss";

const FirstComp = ({ number, plusMinus }) => (
  <div className={compStyles.btns}>
    <button className={compStyles.btnPlus} onClick={() => plusMinus("incr")}>
      plus
    </button>
    <button className={compStyles.btnMinus} onClick={() => plusMinus("decr")}>
      minus
    </button>
  </div>
);

export default FirstComp;
