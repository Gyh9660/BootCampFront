import {observer} from "mobx-react";
import back from "../../../../back.jpg";
import React from "react";
import {Button} from "@mui/material";

interface Props{

}
const MainContainer = observer(({

}:Props)=>{

    return(
        <>
            <div>
                <input type={"text"}/>
                <Button>Search</Button>
            </div>
            <div>
            <img src={back} alt="logo" />
            </div>

            {/*<div>*/}
            {/*    Free Board*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    FAQ*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Q&A*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Notice*/}
            {/*</div>*/}
        </>
    )
})

export default MainContainer;