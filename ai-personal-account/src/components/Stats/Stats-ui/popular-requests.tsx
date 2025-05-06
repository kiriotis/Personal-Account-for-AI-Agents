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

export default function PopularRequests() {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const { data: statsData, isLoading } = useGetStatsQuery();
  const popularRequests = statsData?.popular_requests ?? [];

  const visibleRows = popularRequests.slice(
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
        {t('Top requests')}
      </Typography>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          // overflow: 'hidden',
        }}
      >
        <TableContainer sx={{ flex: 1 }}>
          <Table stickyHeader size="small" aria-label="popular requests table">
            <TableHead>
              <TableRow>
                <TableCell>{t('Request text')}</TableCell>
                <TableCell align="right">{t('Count')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={2}>{t('Loading...')}</TableCell>
                </TableRow>
              ) : (
                visibleRows.map((request, index) => (
                  <TableRow key={index}>
                    <TableCell>{request.request}</TableCell>
                    <TableCell align="right">{request.n}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={popularRequests.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPageOptions={[]} // Скрываем выбор количества строк
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} ${t('of')} ${count}`
          }
        />
      </Box>
    </Box>
  );
}
