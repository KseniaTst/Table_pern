import React, {useEffect, useState} from 'react';
import './App.css';
import {Table} from "./components/table/Table";
import {FilterOperations} from "./components/table/tableFilterOperations/FilterOperations";
import {RowType, TableAPI} from "./API/tableApi";

function App() {

    const [rows, setRows] = useState<Array<RowType>>([])
    const [filteredRows, setFilteredRows] = useState(rows)

    const totalCount = rows.length
    const [page,setPage] = useState(1)
    const rowsPerPage = 3
    const lastRowIndex = rowsPerPage * page
    const firstRowIndex = lastRowIndex - rowsPerPage
    const currentRow = rows.slice(firstRowIndex, lastRowIndex)

    const paginate =(pageNumber:number) => setPage(pageNumber)

    useEffect(() => {
        TableAPI.getTable().then(res => {

            setRows(res.data.rows)
            setFilteredRows(res.data.rows)
        })
    }, [])

    return (
      <div className="App">
          <FilterOperations rows={rows} setFilteredRows={setFilteredRows}/>
          <Table rows={filteredRows} setRows={setFilteredRows}/>
          {/*<TablePagination totalCount={totalCount} rowsPerPage={rowsPerPage}*/}
          {/*paginate={paginate}/>*/}
      </div>
  );
}

export default App;
