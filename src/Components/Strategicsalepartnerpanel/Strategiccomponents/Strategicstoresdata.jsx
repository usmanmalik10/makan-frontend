import React from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import './Strategicsalepartners.scss'
const COLUMNS = [
  { Header: 'Sr #', accessor: 'col1' },
  { Header: 'Shop Name', accessor: 'col2' },
  { Header: 'Contact Number', accessor: 'col3' },
  { Header: 'Shop Address', accessor: 'col4' },
  { Header: 'Area of Service', accessor: 'col5' },
  { Header: 'Category', accessor: 'col6' },
  { Header: 'Location', accessor: 'col7' },
  { Header: 'Column 4', accessor: 'col8' },
  // ... add more columns up to 12
];

const SAMPLE_DATA = [
  {

    col1: 'waleed',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  },
  {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  }, {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  }, {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  }, {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  }, {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  }, {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'waleed',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  }, {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  }, {
    
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
    col5: 'Data 1',
    col6: 'Data 2',
    col7: 'Data 3',
    col8: 'Data 4',
    // ... add more data for each column
  },
  // ... add more rows of data
];

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state,
    setPageSize,
    setFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div>
      {/* Filter input */}
      <input
        type="text"
        placeholder="Search Shop Name"
        onChange={e => {
          setFilter("col1", e.target.value); // adjust if you want to filter by another column
        }}
        className='strategic_search_field'
      />

<table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span>
          Page{' '}
          {state.pageIndex + 1} of {pageOptions.length}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <select
          value={state.pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export function Strategicstoresdata() {
  return (
    <div className="App">
      <h1 className='str_heading'> Stores Data</h1>
      <Table columns={COLUMNS} data={SAMPLE_DATA} />
    </div>
  );
}


