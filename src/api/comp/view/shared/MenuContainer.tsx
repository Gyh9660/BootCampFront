import {observer} from "mobx-react";
import {Button} from "@mui/material";

interface Props {

}
const MenuContainer = observer(({

}:Props)=>{

    return(
        <>
            <div>
                <Button href="http://localhost:3000/">HOME</Button>
                <Button href="http://localhost:3000/boardContainer">Free Board</Button>
                <Button>Q&A</Button>
                <Button>FAQ</Button>
                <Button>Notice</Button>
            </div>
            <div>
                <input type={"text"}/>
                <Button>Search</Button>
            </div>
        </>
    )
})

export default MenuContainer;