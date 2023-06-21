import React, { useEffect, useState } from "react";
import MainComp from "./components/MainComp";
import YevhenStyles from "./YevhenStyles.module.scss";
import ReactForm from "./components/ReactForm";
import AxiosPagination from "./components/AxiosPagination";
import { YevhenUser } from "./components/User/User";

const Yevhen = () => {
    return (
    <div className={YevhenStyles.container}>
        {/* <h1>Hello, my name is Yevhen</h1>
        <MainComp /> */}
        {/* <ReactForm /> */}
        <AxiosPagination Component={YevhenUser}/>
    </div>
    )
}

export default Yevhen;