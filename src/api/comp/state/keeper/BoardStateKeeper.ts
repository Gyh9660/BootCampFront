
import { makeAutoObservable } from "mobx";
import {Board, BoardApi} from "../../api/board";

class BoardStateKeeper {
    static _instance: BoardStateKeeper;

    private readonly boardApi: BoardApi;

    static get Instance(){
        if(!BoardStateKeeper._instance){
            BoardStateKeeper._instance = new BoardStateKeeper();
        }
        return BoardStateKeeper._instance;
    }

    constructor(
        boardApi:BoardApi = BoardApi.instance,
    ) {
        this.boardApi = boardApi;
        makeAutoObservable(this, {}, {autoBind:true});
    }

    async findBoardList():Promise<Board[]>{
        return this.boardApi.findBoardList();
    }
}

export default BoardStateKeeper