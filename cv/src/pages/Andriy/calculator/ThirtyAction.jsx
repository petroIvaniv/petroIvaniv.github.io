const ThirdAction = ({multiplyDivide }) => (
    <div >
        <button onClick={() => multiplyDivide("multiply")}>*</button>
        <button onClick={() => multiplyDivide("divide")}>/</button>
    </div>
);

export default ThirdAction;