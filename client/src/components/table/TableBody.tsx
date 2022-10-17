import styles from "./table.module.css";
import {RowType} from "../../API/tableApi";

type PropsType = {
    rows: Array<RowType>
}

export const TableBody = ({rows}: PropsType) => {

    return (
        <>
            {rows.map(rw => {

                const date = new Date(rw.date);
                const formattedDate = `${date.toLocaleDateString()} `;

                return (<div className={styles.rowsContainer}>
                    <div>{formattedDate}</div>
                    <div key={rw.id}>{rw.name}</div>
                    <div>{rw.quantity}</div>
                    <div>{rw.distance}</div>
                </div>)
            })}
        </>
    )
}