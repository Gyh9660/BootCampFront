import React from 'react';
import './App.css';
import MenuContainer from "./api/comp/view/shared/MenuContainer";
import Routers from "./api/comp/view/shared/Routers";


function App() {
  return (
    <div className="App">
        <MenuContainer/>
        <Routers/>
    </div>
  );
}
//라우트 파일 분리해서 관리

export default App;
