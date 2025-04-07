import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ActivityTableUi from '../../../../components/Tables/activity-table.ui';
import { GridColDef } from '@mui/x-data-grid';
import { useAllActivitysQuery } from '../../../../services/activity.service';

interface Props {}

interface IRows {
  last_update: string;
  platform: 'Telegram' | 'VK' | 'WebChat';
  status: 'Paid' | 'Booked' | 'Clicked booking' | 'Lost';
  chat: string;
}

const rows: Array<IRows> = [
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'Telegram',
    status: 'Paid',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'WebChat',
    status: 'Booked',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'VK',
    status: 'Lost',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'Telegram',
    status: 'Clicked booking',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'WebChat',
    status: 'Paid',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'VK',
    status: 'Booked',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'Telegram',
    status: 'Lost',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'WebChat',
    status: 'Clicked booking',
    chat: 'Lorem ipsum',
  },
  {
    last_update: '2025-03-19T18:57:30',
    platform: 'VK',
    status: 'Paid',
    chat: 'Lorem ipsum',
  },
];

export default function ActivityTab({}: Props) {
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
      <ActivityTableUi
        columns={columns}
        rows={
          activityRows?.data.map((el, ind) => {
            return { ...el, id: ind };
          }) ||
          rows.map((el, ind) => {
            return { ...el, id: ind };
          })
        }
      />
    </Box>
  );
}
