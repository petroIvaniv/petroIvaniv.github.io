import React, { useEffect, useState } from "react";
import MainComp from "./components/MainComp";
import YevhenStyles from "./YevhenStyles.module.scss";
import ReactForm from "./components/ReactForm";

const Yevhen = () => {
    return (
    <div className={YevhenStyles.container}>
        {/* <h1>Hello, my name is Yevhen</h1>
        <MainComp /> */}
        <ReactForm />
    </div>
    )
}

export default Yevhen;