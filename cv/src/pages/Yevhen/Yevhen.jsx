import React from "react";
import MainComp from "./components/MainComp";
import YevhenStyles from "./YevhenStyles.module.scss";

const Yevhen = () => (
    <div className={YevhenStyles.container}>
        <h1>Hello, my name is Yevhen</h1>
        <MainComp />
    </div>
)

export default Yevhen;