import {useState} from "react";
import styles from './accordion.module.css'

type PropsType = {
    options: Array<string>
    setColumn?: (column: string) => void
    setCondition?: (condition: string) => void
}

export const Accordion = (props: PropsType) => {

    const {options, setColumn, setCondition} = props

    const [option, setOption] = useState('Выберите параметр')
    const [show, setShow] = useState(false)

    const onOptionClick = (op: string) => {
        setShow(false)
        setOption(op)
        if (setColumn) {
            setColumn(op)
        }
        if (setCondition) {
            setCondition(op)
        }
    }

    return (
        <div className={styles.accordionContainer}>
            <span onClick={() => setShow(!show)}>
                {option}
                <span className={styles.selectSpan}/>
            </span>
            {show && <div className={styles.optionsContainer}>
                {options.map((op, i) => {
                    return <span key={i} onClick={() => onOptionClick(op)}>{op}</span>
                })
                }
            </div>}

        </div>

    )
}