import { Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Props {
  columns: GridColDef[];
  rows: any[];
}

const paginationModel = { page: 0, pageSize: 5 };

export default function ActivityTableUi({ columns, rows }: Props) {
  const { t } = useTranslation('translation');

  const localeText = {
    noRowsLabel: t('dataGrid.noRowsLabel'),
    footerTotalVisibleRows: (visibleCount: number, totalCount: number) =>
      t('dataGrid.footerTotalVisibleRows', { visibleCount, totalCount }),
    columnMenuLabel: t('dataGrid.columnMenuLabel'),
    columnMenuShowColumns: t('dataGrid.columnMenuShowColumns'),
    columnMenuFilter: t('dataGrid.columnMenuFilter'),
    columnMenuHideColumn: t('dataGrid.columnMenuHideColumn'),
    columnMenuUnsort: t('dataGrid.columnMenuUnsort'),
    columnMenuSortAsc: t('dataGrid.columnMenuSortAsc'),
    columnMenuSortDesc: t('dataGrid.columnMenuSortDesc'),
    filterPanelAddFilter: t('dataGrid.filterPanelAddFilter'),
    filterPanelDeleteIconLabel: t('dataGrid.filterPanelDeleteIconLabel'),
    filterPanelOperators: t('dataGrid.filterPanelOperators'),
    filterPanelOperatorAnd: t('dataGrid.filterPanelOperatorAnd'),
    filterPanelOperatorOr: t('dataGrid.filterPanelOperatorOr'),
    filterPanelColumns: t('dataGrid.filterPanelColumns'),
    filterPanelInputLabel: t('dataGrid.filterPanelInputLabel'),
    filterPanelInputPlaceholder: t('dataGrid.filterPanelInputPlaceholder'),
    filterOperatorContains: t('dataGrid.filterOperatorContains'),
    filterOperatorEquals: t('dataGrid.filterOperatorEquals'),
    filterOperatorStartsWith: t('dataGrid.filterOperatorStartsWith'),
    filterOperatorEndsWith: t('dataGrid.filterOperatorEndsWith'),
    filterOperatorIs: t('dataGrid.filterOperatorIs'),
    filterOperatorNot: t('dataGrid.filterOperatorNot'),
    filterOperatorAfter: t('dataGrid.filterOperatorAfter'),
    filterOperatorOnOrAfter: t('dataGrid.filterOperatorOnOrAfter'),
    filterOperatorBefore: t('dataGrid.filterOperatorBefore'),
    filterOperatorOnOrBefore: t('dataGrid.filterOperatorOnOrBefore'),
    filterOperatorIsEmpty: t('dataGrid.filterOperatorIsEmpty'),
    filterOperatorIsNotEmpty: t('dataGrid.filterOperatorIsNotEmpty'),
    columnsPanelTextFieldLabel: t('dataGrid.columnsPanelTextFieldLabel'),
    columnsPanelTextFieldPlaceholder: t(
      'dataGrid.columnsPanelTextFieldPlaceholder'
    ),
    columnsPanelDragIconLabel: t('dataGrid.columnsPanelDragIconLabel'),
    columnsPanelShowAllButton: t('dataGrid.columnsPanelShowAllButton'),
    columnsPanelHideAllButton: t('dataGrid.columnsPanelHideAllButton'),
  };

  return (
    <Paper sx={{ height: 400, width: '100%', minHeight: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        localeText={localeText}
      />
    </Paper>
  );
}
