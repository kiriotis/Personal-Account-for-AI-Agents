import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
interface iPopularRequests {}
interface Poprequest {
  name: string;
  requests: number;
  conversion: string;
  status: string;
}

interface PoprequestCardProps {
  destinations: Poprequest[];
}

const popularRequests = [
  {
    query: 'Турка в Турцию в июле',
    count: 342,
    conversion: '32.4%',
    status: 'Оппенко',
  },
  {
    query: 'Гермольковые курорты в Сочи',
    count: 287,
    conversion: '28.9%',
    status: 'Оппенко',
  },
  {
    query: 'Турка в Турцию в июле',
    count: 342,
    conversion: '32.4%',
    status: 'Оппенко',
  },
  {
    query: 'Гермольковые курорты в Сочи',
    count: 287,
    conversion: '28.9%',
    status: 'Оппенко',
  },
  {
    query: 'Турка в Турцию в июле',
    count: 342,
    conversion: '32.4%',
    status: 'Оппенко',
  },
  {
    query: 'Гермольковые курорты в Сочи',
    count: 287,
    conversion: '28.9%',
    status: 'Оппенко',
  },
  {
    query: 'Турка в Турцию в июле',
    count: 342,
    conversion: '32.4%',
    status: 'Оппенко',
  },
  {
    query: 'Гермольковые курорты в Сочи',
    count: 287,
    conversion: '28.9%',
    status: 'Оппенко',
  },
  {
    query: 'Стоимость визы в Таиланд',
    count: 215,
    conversion: '12.6%',
    status: 'Хорово',
  },
  {
    query: 'Лучшие отели на Бали',
    count: 189,
    conversion: '24.3%',
    status: 'Оппенко',
  },
  {
    query: 'Турки с детьми в Европу',
    count: 156,
    conversion: '9.8%',
    status: 'Требует внимания',
  },
  {
    query: 'Стоимость визы в Таиланд',
    count: 215,
    conversion: '12.6%',
    status: 'Хорово',
  },
  {
    query: 'Лучшие отели на Бали',
    count: 189,
    conversion: '24.3%',
    status: 'Оппенко',
  },
  {
    query: 'Турки с детьми в Европу',
    count: 156,
    conversion: '9.8%',
    status: 'Требует внимания',
  },
  {
    query: 'Стоимость визы в Таиланд',
    count: 215,
    conversion: '12.6%',
    status: 'Хорово',
  },
  {
    query: 'Лучшие отели на Бали',
    count: 189,
    conversion: '24.3%',
    status: 'Оппенко',
  },
  {
    query: 'Турки с детьми в Европу',
    count: 156,
    conversion: '9.8%',
    status: 'Требует внимания',
  },
];

export default function PopularRequests({}: iPopularRequests) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '50%', ms: '50%', md: '100%' },
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5">{t('Top requests')}</Typography>
      <Box
        sx={{
          height: '100%',
          minHeight: 200,
          maxHeight: { xs: '300px', sm: '100%' },
          overflow: 'hidden', // Внешний контейнер без прокрутки
          position: 'relative', // Для sticky-элементов
        }}
      >
        <TableContainer
          sx={{
            height: '100%',
            overflow: 'auto', // Прокрутка только внутри TableContainer
          }}
        >
          <Table
            stickyHeader
            sx={{ minWidth: 250 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead
              sx={{
                // position: 'sticky',
                top: 0,
                zIndex: 2,
                backgroundColor: 'background.paper',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Необязательно: тень при скролле
              }}
            >
              <TableRow>
                <TableCell>{t('Request text')}</TableCell>
                <TableCell align="right">{t('Count')}</TableCell>
                <TableCell align="right">{t('Conversion')}</TableCell>
                <TableCell align="right">{t('Status')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {popularRequests.map((request, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {request.query}
                  </TableCell>
                  <TableCell align="right">{request.count}</TableCell>
                  <TableCell align="right">{request.conversion}</TableCell>
                  <TableCell align="right">{request.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
