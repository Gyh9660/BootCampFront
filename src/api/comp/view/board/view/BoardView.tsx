import {observer} from "mobx-react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {Board} from "../../../api/board";
import dayjs from 'dayjs';

interface Props {
boardList : Board[];
}
const BoardView = observer(({
boardList,
}:Props)=>{
    return (
        <>
            <div
            >
                <Table style={{margin:30}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width:50}}>No</TableCell>
                            <TableCell style={{width:600}}>Title</TableCell>
                            <TableCell style={{width:100}}>RegisterDate</TableCell>
                            <TableCell style={{width:100}}>UserId</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {boardList.map(({id,no,title,registerDate,userId})=>(
                            <TableRow key={id} style={{height:"50px"}}>
                                <TableCell style={{width:50}}>{no}</TableCell>
                                <TableCell onClick={()=>console.log(id)} style={{width:600}}>{title}</TableCell>
                                <TableCell style={{width:100}}>{dayjs(registerDate).format('YYYY/MM/DD HH:mm')}</TableCell>
                                <TableCell style={{width:100}}>{userId}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
})

export default BoardView;