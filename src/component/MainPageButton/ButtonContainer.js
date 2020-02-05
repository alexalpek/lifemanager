import React from "react";
import MainPageButton from "./MainPageButton";
import {Link} from "react-router-dom";
import MainPage from "./MainPage";

export default function ButtonContainer() {

    const style = {
        display:"flex"
    };

    return(
        <div style={style}>
            <Link to="/login">
                <MainPageButton text="Login"/>
            </Link>
            <Link to="/register">
                <MainPageButton text="Register"/>
            </Link>
        </div>
    )
}