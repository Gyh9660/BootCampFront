import {observer, useLocalObservable} from "mobx-react";
import React, {useEffect, useState} from "react";
import BoardView from "./view/BoardView";
import {BoardStateKeeper} from "../../state";
import {Board} from "../../api/board";
import { Button } from "@mui/material";
interface Props {
    user: String
}
const BoardContainer = observer(({
    user,

}:Props) => {
    //
    const boardStateKeeper = useLocalObservable(()=>new BoardStateKeeper());

    const [boardList, setBoardList] = useState<Board[]>([]);
    const findBoardLists = async () => {
        const newFindBoardList:Board[] = await boardStateKeeper.findBoardList();
        console.log(newFindBoardList);
        setBoardList(newFindBoardList);
    }

    useEffect(()=>{
        findBoardLists().then(()=>console.log("abc"));
    },[]);


    return(
        <>
            <div>
                <BoardView
                boardList={boardList}
                />
                <div>
                <Button>새글</Button>
                </div>
            </div>
        </>
    )

})

export default BoardContainer;