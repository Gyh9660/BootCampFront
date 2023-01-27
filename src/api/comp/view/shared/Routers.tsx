import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainContainer from "./MainContainer";
import BoardContainer from "../board/BoardContainer";
import React from "react";
import RegisterBoardContainer from "../board/RegisterBoardContainer";

const Routers = ()=>{
    return(
        <>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContainer/>}/>
                    <Route path="/boardContainer" element={<BoardContainer user={"abc"}/>}></Route>
                    <Route path="/newFreeBoard" element={<RegisterBoardContainer/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}

export default Routers;