import Board from "./Board";
import axios from "axios";

class Api {
    static _instance: Api;

    static get instance(){
        if(!Api._instance){
            Api._instance = new Api();
        }
        return Api._instance;
    }

    async findBoardList():Promise<Board[]> {
        const res = await axios.get("/board/boardList")
        return res.data;

    }
}

export default Api;