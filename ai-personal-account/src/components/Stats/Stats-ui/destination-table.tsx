import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface iDestinationTable {}

const destinations = [
  { name: 'Кемер, Турция', requests: 60 },
  { name: 'Шарм-Эль-Шейх, Египет', requests: 54 },
  { name: 'Дубай, ОАЭ', requests: 51 },
  { name: 'Алания, Турция', requests: 33 },
  { name: 'Адлер, Сочи', requests: 28 },
  { name: 'Судак, Крым', requests: 22 },
  { name: 'Кемер, Турция', requests: 60 },
  { name: 'Шарм-Эль-Шейх, Египет', requests: 54 },
  { name: 'Дубай, ОАЭ', requests: 51 },
  { name: 'Алания, Турция', requests: 33 },
  { name: 'Адлер, Сочи', requests: 28 },
  { name: 'Судак, Крым', requests: 22 },
  { name: 'Кемер, Турция', requests: 60 },
  { name: 'Шарм-Эль-Шейх, Египет', requests: 54 },
  { name: 'Дубай, ОАЭ', requests: 51 },
  { name: 'Алания, Турция', requests: 33 },
  { name: 'Адлер, Сочи', requests: 28 },
  { name: 'Судак, Крым', requests: 22 },
];

export default function DestinationTable({}: iDestinationTable) {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const rowsPerPage = 10; // Фиксированное значение - 10 строк на странице

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Вычисляем отображаемые строки
  const visibleRows = destinations.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t('Top destinations')}
      </Typography>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <TableContainer sx={{ flex: 1 }}>
          <Table
            stickyHeader
            size="small"
            aria-label="destinations table"
          >
            <TableHead
              sx={{
                backgroundColor: 'background.paper',
              }}
            >
              <TableRow>
                <TableCell>{t('Country')}</TableCell>
                <TableCell align="right">{t('Requests')}</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {visibleRows.map((destination, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {destination.name}
                  </TableCell>
                  <TableCell align="right">{destination.requests}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={destinations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[]} // Скрываем выбор количества строк
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} ${t('of')} ${count}`
          }
        />
      </Box>
    </Box>
  );
}