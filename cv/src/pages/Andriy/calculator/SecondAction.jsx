const SecondAction = ({plusMinus }) => (
    <div >
        <button  onClick={() => plusMinus("plus")}>+</button>
        <button  onClick={() => plusMinus("minus")}>-</button>
    </div>
);

export default SecondAction;