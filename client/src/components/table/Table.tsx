import {RowType} from "../../API/tableApi";
import styles from './table.module.css'
import {TableHead} from "./TableHead";
import {TableBody} from "./TableBody";

type PropsType = {
    rows:Array<RowType>
    setRows: (rows:Array<RowType>)=>void
}

export const Table = (props:PropsType) => {

  const {rows,setRows}= props

    return (
        <div className={styles.tableContainer}>
            <TableHead setRows={setRows}/>
                <TableBody rows={rows}/>

            </div>
    )
}