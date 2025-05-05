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
import { useGetStatsQuery } from '../../../services/stats.service';

export default function DestinationTable() {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const { data: statsData, isLoading } = useGetStatsQuery();

  const destinations = statsData?.destinations ?? [];

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
          <Table stickyHeader size="small" aria-label="destinations table">
            <TableHead sx={{ backgroundColor: 'background.paper' }}>
              <TableRow>
                <TableCell>{t('Country')}</TableCell>
                <TableCell align="right">{t('Requests')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={2}>{t('Loading...')}</TableCell>
                </TableRow>
              ) : (
                visibleRows.map((destination, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {destination.direction}
                    </TableCell>
                    <TableCell align="right">{destination.n}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={destinations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPageOptions={[]} // скрываем выбор количества строк
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} ${t('of')} ${count}`
          }
        />
      </Box>
    </Box>
  );
}
