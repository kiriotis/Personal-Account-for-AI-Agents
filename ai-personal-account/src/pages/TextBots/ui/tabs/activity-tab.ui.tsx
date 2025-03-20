import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ActivityTableUi from '../../../../components/table/activity-table.ui';
import { GridColDef } from '@mui/x-data-grid';

interface Props {}

interface IRows {
  id: number;
  date: string;
  platform: 'Telegram' | 'VK' | 'WebChat';
  status: 'Paid' | 'Booked' | 'Clicked booking' | 'Lost';
  chat: string;
}

const rows: Array<IRows> = [
  {
    id: 1,
    date: '2025-03-19T18:57:30',
    platform: 'Telegram',
    status: 'Paid',
    chat: 'Lorem ipsum',
  },
  {
    id: 2,
    date: '2025-03-19T18:57:30',
    platform: 'WebChat',
    status: 'Booked',
    chat: 'Lorem ipsum',
  },
  {
    id: 3,
    date: '2025-03-19T18:57:30',
    platform: 'VK',
    status: 'Lost',
    chat: 'Lorem ipsum',
  },
  {
    id: 4,
    date: '2025-03-19T18:57:30',
    platform: 'Telegram',
    status: 'Clicked booking',
    chat: 'Lorem ipsum',
  },
  {
    id: 5,
    date: '2025-03-19T18:57:30',
    platform: 'WebChat',
    status: 'Paid',
    chat: 'Lorem ipsum',
  },
  {
    id: 6,
    date: '2025-03-19T18:57:30',
    platform: 'VK',
    status: 'Booked',
    chat: 'Lorem ipsum',
  },
  {
    id: 7,
    date: '2025-03-19T18:57:30',
    platform: 'Telegram',
    status: 'Lost',
    chat: 'Lorem ipsum',
  },
  {
    id: 8,
    date: '2025-03-19T18:57:30',
    platform: 'WebChat',
    status: 'Clicked booking',
    chat: 'Lorem ipsum',
  },
  {
    id: 9,
    date: '2025-03-19T18:57:30',
    platform: 'VK',
    status: 'Paid',
    chat: 'Lorem ipsum',
  },
];

export default function ActivityTab({}: Props) {
  const { t } = useTranslation();

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'date', headerName: t('table.date'), width: 180 },
      { field: 'platform', headerName: t('table.platform'), width: 130 },
      { field: 'status', headerName: t('table.status'), width: 130 },
      { field: 'chat', headerName: t('table.chat'), width: 200 },
    ],
    [t]
  );

  return (
    <Box sx={{ width: '100%', display: 'flex', px: 4 }}>
      <ActivityTableUi columns={columns} rows={rows} />
    </Box>
  );
}
