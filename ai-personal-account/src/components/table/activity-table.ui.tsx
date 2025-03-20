import { Avatar, Box, Chip, Paper, Button } from '@mui/material';
import { useState } from 'react';
import ChatPopup from '../Pop-Up/ChatPopup';
import { useTranslation } from 'react-i18next';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Props {
  columns: GridColDef[];
  rows: any[];
}

const paginationModel = { page: 0, pageSize: 5 };

function setVariant(variant: 'Paid' | 'Booked' | 'Clicked booking' | 'Lost') {
  switch (variant) {
    case 'Paid':
      return 'success';
    case 'Booked':
      return 'warning';
    case 'Clicked booking':
      return 'info';
    case 'Lost':
      return 'error';
    default:
      return 'info';
  }
}

export default function ActivityTableUi({ columns, rows }: Props) {
  const { t } = useTranslation('translation');

  const renderPlatformCell = (params: any) => {
    // Custom rendering logic for platform
    return (
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          sx={{ width: 32, height: 32, fontSize: '14px' }}
          alt={params.value}
          src="/static/images/avatar/1.jpg"
        >
          {params.value
            .split(/(?=[A-Z])/)
            .map((word: string) => word[0])
            .join('')
            .slice(0, 2)}
        </Avatar>
        <span>{params.value}</span>
      </Box>
    );
  };

  const renderStatusCell = (params: any) => {
    // Custom rendering logic for status
    return <Chip label={params.value} color={setVariant(params.value)} />;
  };

  const renderChatCell = (params: any) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <span>{params.value}</span>
        <Button variant="outlined"  onClick={handleClickOpen} endIcon={<OpenInNewIcon />} >
          {t('dataGrid.openChatButton')}
        </Button>
        <ChatPopup open={open} onClose={handleClose} chatId={params.id} />
      </Box>
    );
  };

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

  const updatedColumns = columns.map((column) => {
    if (column.field === 'platform') {
      return { ...column, renderCell: renderPlatformCell };
    }
    if (column.field === 'status') {
      return { ...column, renderCell: renderStatusCell };
    }
    if (column.field === 'chat') {
      return { ...column, renderCell: renderChatCell };
    }
    return column;
  });

  return (
    <Paper sx={{ height: 400, width: '100%', minHeight: '100%' }}>
      <DataGrid
        rows={rows}
        columns={updatedColumns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        localeText={localeText}
      />
    </Paper>
  );
}
