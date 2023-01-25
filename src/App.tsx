import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BoardContainer from "./api/comp/view/board/BoardContainer";
import MenuContainer from "./api/comp/view/shared/MenuContainer";
import MainContainer from "./api/comp/view/shared/MainContainer";


function App() {
  return (
    <div className="App">
        <MenuContainer/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainContainer/>}/>
                 <Route path="/boardContainer" element={<BoardContainer user={"abc"}/>}></Route>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
