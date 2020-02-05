import React from "react";
import MainPageButton from "./MainPageButton";

export default function ButtonContainer() {

    const style = {
        display:"flex"
    };

    return(
        <div style={style}>
            <MainPageButton text="Login"/>
            <MainPageButton text="Register"/>
        </div>
    )
}