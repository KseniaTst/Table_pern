import styles from './tablePagination.module.css'

type PropsType = {
    totalCount:number
    rowsPerPage:number
    paginate: (pageNumber:number)=>void
}

export const TablePagination = (props: PropsType) => {

    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(props.totalCount / props.rowsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={styles.paginationContainer}>
                {
                    pageNumbers.map(number => (
                                <span key={number} onClick={()=>props.paginate(number)}>{number}</span>
                        )
                    )
                }
        </div>
    )
}