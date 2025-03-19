import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Props {
  columns: GridColDef[];
  rows: any[];
}

export default function TableUi({ columns, rows }: Props) {
const paginationModel = { page: 0, pageSize: 5 };

return (
    <Paper sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
