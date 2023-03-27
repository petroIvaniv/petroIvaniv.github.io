const FirstComp = ({math}) => (
    <div>
        <button onClick={() => math('plus')}>+</button>
        <button onClick={() => math('minus')}>-</button>
    </div>
);
export default FirstComp;