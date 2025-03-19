import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Checkbox,
} from '@mui/material';
import { useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';

interface Props {
  columns: GridColDef[];
  rows: any[];
}

export default function TableUi({ columns, rows }: Props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = new Set(rows.map((_, index) => index));
      setSelected(newSelecteds);
      return;
    }
    setSelected(new Set());
  };

  const handleClick = (index: number) => {
    const newSelected = new Set(selected);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (index: number) => selected.has(index);

  const sortedRows = orderBy
    ? [...rows].sort((a, b) => {
        if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
        return 0;
      })
    : rows;

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: '100%',
        width: '100%',
        overflowX: 'auto',
        '@media (max-width: 600px)': { width: '100%', overflowX: 'scroll' },
      }}
    >
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selected.size > 0 && selected.size < rows.length}
                checked={rows.length > 0 && selected.size === rows.length}
                onChange={handleSelectAllClick}
              />
            </TableCell>
            {columns.map((column) => (
              <TableCell key={column.field}>
                <TableSortLabel
                  active={orderBy === column.field}
                  direction={orderBy === column.field ? order : 'asc'}
                  onClick={() => handleRequestSort(column.field)}
                >
                  {column.headerName}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, rowIndex) => {
              const isItemSelected = isSelected(rowIndex);
              return (
                <TableRow
                  key={rowIndex}
                  hover
                  onClick={() => handleClick(rowIndex)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell key={column.field}>
                      {row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
