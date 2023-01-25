
class Board{

    id: string;
    no: number;
    title:string;
    content:string;
    registerDate:Date;
    userId:string;

    constructor(id:string, no:number, title:string, content:string, registerDate:Date, userId:string) {
        this.id = id;
        this.no = no;
        this.title =title;
        this.content=content;
        this.registerDate=registerDate;
        this.userId=userId;
    }
}
export default Board;