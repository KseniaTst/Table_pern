import {Accordion} from "../../accordion/Accordion";
import styles from './filerOperations.module.css'
import {useEffect, useState} from "react";
import {RowType} from "../../../API/tableApi";

type PropsType = {
    rows: Array<RowType>
    setFilteredRows: (rows: Array<RowType>) => void
}

export const FilterOperations = (props: PropsType) => {

    const {rows, setFilteredRows} = props

    const columns = ['название', 'количество', 'расстояние']
    let conditions: string[] = []

    const [column, setColumn] = useState('')
    const [condition, setCondition] = useState('')
    const [value, setValue] = useState('')

    if (column === 'название') conditions = ['содержит']
    else conditions = ['равно', 'содержит', 'больше', 'меньше']



    useEffect(() => {
        switch (column) {
            case 'название':
                if (condition === 'содержит')
                    setFilteredRows(rows.filter(rw => rw.name.includes(value)))
                break;
            case 'количество':
                if (condition === 'равно' && value.length) {
                    setFilteredRows(rows.filter(rw => rw.quantity.toString() === value))
                } else if (condition === 'содержит') {
                    setFilteredRows(rows.filter(rw => rw.quantity.toString().includes(value)))
                } else if (condition === 'больше') {
                    setFilteredRows(rows.filter(rw => rw.quantity > Number(value)))
                } else if (condition === 'меньше') {
                    setFilteredRows(rows.filter(rw => rw.quantity < Number(value)))
                }
                break;
            case 'расстояние':
                if (condition === 'равно'  && value.length) {
                    setFilteredRows(rows.filter(rw => rw.distance.toString() === value))
                } else if (condition === 'содержит') {
                    setFilteredRows(rows.filter(rw => rw.distance.toString().includes(value)))
                } else if (condition === 'больше') {
                    setFilteredRows(rows.filter(rw => rw.distance > Number(value)))
                } else if (condition === 'меньше') {
                    setFilteredRows(rows.filter(rw => rw.distance < Number(value)))
                }
                break;
            default:
                return
        }
    }, [column, condition, value])

    return (
        <div className={styles.filterContainer}>
            <h3>Фильтрация</h3>
            <div className={styles.filter}>
                <Accordion options={columns} setColumn={setColumn}/>
                <Accordion options={conditions} setCondition={setCondition}/>
                <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            </div>
        </div>
    )
}

