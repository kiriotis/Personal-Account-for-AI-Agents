import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ActivityTableUi from '../../../../components/Tables/activity-table.ui';
import { GridColDef } from '@mui/x-data-grid';
import { useAllActivitysQuery } from '../../../../services/activity.service';

export default function ActivityTab() {
  const { t } = useTranslation();
  const { data: activityRows } = useAllActivitysQuery();

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'last_update', headerName: t('table.date'), width: 180 },
      { field: 'platform', headerName: t('table.platform'), width: 130 },
      { field: 'status', headerName: t('table.status'), width: 130 },
      { field: 'chat', headerName: t('table.chat'), width: 200 },
    ],
    [t]
  );

  return (
    <Box sx={{ width: '100%', display: 'flex', p: { xs: 1, sm: 2 } }}>
      {activityRows && (
        <ActivityTableUi columns={columns} rows={activityRows?.data} />
      )}
    </Box>
  );
}
