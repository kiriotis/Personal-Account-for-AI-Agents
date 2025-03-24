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
  return (
    <Box
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h5">Top requests</Typography>
      <Box
        sx={{
          maxHeight: { xs: 150, sm: 150, md: 150, lg: 380 },
          overflow: 'auto',
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Текст запроса</TableCell>
                <TableCell align="right">Количество</TableCell>
                <TableCell align="right">Конверсия</TableCell>
                <TableCell align="right">Статус</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {popularRequests.map((popularRequests, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {popularRequests.query}
                  </TableCell>
                  <TableCell align="right">{popularRequests.count}</TableCell>
                  <TableCell align="right">
                    {popularRequests.conversion}
                  </TableCell>
                  <TableCell align="right">{popularRequests.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
