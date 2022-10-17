import styles from "./table.module.css";
import { useState } from "react";
import { RowType, TableAPI } from "../../API/tableApi";

type PropsType = {
    setRows: (rows: Array<RowType>) => void
}
type SortType = 'name' | 'quantity' | 'distance' | ''


export const TableHead = ({setRows}: PropsType) => {

    const [sort, setSort] = useState(false)
    const [sortedGroup, setSortedGroup] = useState('')


    const onNameSortHandler = (sortBy: SortType) => {
        setSort(!sort)
        setSortedGroup('name')
        if (sort === false) {
            TableAPI.sortTable('asc', sortBy).then(res => setRows(res.data))
        } else TableAPI.sortTable('desc', sortBy).then(res => setRows(res.data))
    }
    const onQuantitySortHandle = (sortBy: SortType) => {
        setSort(!sort)
        setSortedGroup('quantity')
        if (sort === false) {
            TableAPI.sortTable('asc', sortBy).then(res => setRows(res.data))
        } else TableAPI.sortTable('desc', sortBy).then(res => setRows(res.data))
    }
    const onDistanceSortHandle = (sortBy: SortType) => {
        setSort(!sort)
        setSortedGroup('distance')

        if (sort === false) {
            TableAPI.sortTable('asc', sortBy).then(res => setRows(res.data))
        } else TableAPI.sortTable('desc', sortBy).then(res => setRows(res.data))
    }

    return (
        <div className={styles.headerContainer}>
            <div><span>Дата</span></div>
            <div>
                <span>Название</span>
                <span className={sort && sortedGroup === 'name' ? styles.sortSpanDesc : styles.sortSpanAsc}
                      onClick={() => onNameSortHandler('name')}/>
            </div>
            <div>
                <span>Количесво</span>
                <span className={sort && sortedGroup === 'quantity' ? styles.sortSpanDesc : styles.sortSpanAsc}
                      onClick={() => onQuantitySortHandle('quantity')}/>
            </div>
            <div className={styles.headerDistance}>
                <span>Расстояние</span>
                <span className={sort && sortedGroup === 'distance' ? styles.sortSpanDesc : styles.sortSpanAsc}
                      onClick={() => onDistanceSortHandle('distance')}/>
            </div>
        </div>
    )
}