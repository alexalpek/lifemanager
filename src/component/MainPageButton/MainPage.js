import React from "react";
import ButtonContainer from "./ButtonContainer";
import Title from "./Title";


export default function MainPage() {

    const MainPageStyle = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100vw",
        height:"100vh",
        backgroundColor: "#282c34"
    };

    return(
        <div style={MainPageStyle}>
            <Title/>
            <ButtonContainer/>
        </div>
    )
}