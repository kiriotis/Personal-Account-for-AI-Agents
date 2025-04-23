// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   TablePagination,
// } from '@mui/material';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const popularRequests = [
//   {
//     query: 'Турка в Турцию в июле',
//     count: 342,
//     conversion: '32.4%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Гермольковые курорты в Сочи',
//     count: 287,
//     conversion: '28.9%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Турка в Турцию в июле',
//     count: 342,
//     conversion: '32.4%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Гермольковые курорты в Сочи',
//     count: 287,
//     conversion: '28.9%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Турка в Турцию в июле',
//     count: 342,
//     conversion: '32.4%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Гермольковые курорты в Сочи',
//     count: 287,
//     conversion: '28.9%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Турка в Турцию в июле',
//     count: 342,
//     conversion: '32.4%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Гермольковые курорты в Сочи',
//     count: 287,
//     conversion: '28.9%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Стоимость визы в Таиланд',
//     count: 215,
//     conversion: '12.6%',
//     status: 'Хорово',
//   },
//   {
//     query: 'Лучшие отели на Бали',
//     count: 189,
//     conversion: '24.3%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Турки с детьми в Европу',
//     count: 156,
//     conversion: '9.8%',
//     status: 'Требует внимания',
//   },
//   {
//     query: 'Стоимость визы в Таиланд',
//     count: 215,
//     conversion: '12.6%',
//     status: 'Хорово',
//   },
//   {
//     query: 'Лучшие отели на Бали',
//     count: 189,
//     conversion: '24.3%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Турки с детьми в Европу',
//     count: 156,
//     conversion: '9.8%',
//     status: 'Требует внимания',
//   },
//   {
//     query: 'Стоимость визы в Таиланд',
//     count: 215,
//     conversion: '12.6%',
//     status: 'Хорово',
//   },
//   {
//     query: 'Лучшие отели на Бали',
//     count: 189,
//     conversion: '24.3%',
//     status: 'Оппенко',
//   },
//   {
//     query: 'Турки с детьми в Европу',
//     count: 156,
//     conversion: '9.8%',
//     status: 'Требует внимания',
//   },
// ];

// export default function PopularRequests() {
//   const { t } = useTranslation();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Вычисляем отображаемые строки
//   const visibleRows = popularRequests.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 2,
//       }}
//     >
//       <Box
//         sx={{
//           height: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <Typography variant="h5" sx={{ mb: 2 }}>
//           {t('Top requests')}
//         </Typography>

//         <TableContainer
//           sx={{
//             flex: 1,
//             overflow: 'hidden',
//           }}
//         >
//           <Table
//             stickyHeader
//             sx={{ minWidth: 250 }}
//             size="small"
//             aria-label="a dense table"
//           >
//             <TableHead
//               sx={{
//                 top: 0,
//                 zIndex: 2,
//                 backgroundColor: 'background.paper',
//                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//               }}
//             >
//               <TableRow>
//                 <TableCell>{t('Request text')}</TableCell>
//                 <TableCell align="right">{t('Count')}</TableCell>
//                 <TableCell align="right">{t('Conversion')}</TableCell>
//                 <TableCell align="right">{t('Status')}</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {visibleRows.map((request, index) => (
//                 <TableRow
//                   key={index}
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {request.query}
//                   </TableCell>
//                   <TableCell align="right">{request.count}</TableCell>
//                   <TableCell align="right">{request.conversion}</TableCell>
//                   <TableCell align="right">{request.status}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         <TablePagination

//           component="div"
//           count={popularRequests.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           labelRowsPerPage={t('Rows per page')}
//           labelDisplayedRows={({ from, to, count }) =>
//             `${from}-${to} ${t('of')} ${count}`
//           }
//         />
//       </Box>
//     </Box>
//   );
// }

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

export default function PopularRequests() {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const rowsPerPage = 10; // Фиксированное значение - 10 строк на странице

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Вычисляем отображаемые строки
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
          overflow: 'hidden',
        }}
      >
        <TableContainer sx={{ flex: 1 }}>
          <Table stickyHeader size="small" aria-label="popular requests table">
            <TableHead>
              <TableRow>
                <TableCell>{t('Request text')}</TableCell>
                <TableCell align="right">{t('Count')}</TableCell>
                <TableCell align="right">{t('Conversion')}</TableCell>
                <TableCell align="right">{t('Status')}</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {visibleRows.map((request, index) => (
                <TableRow key={index}>
                  <TableCell>{request.query}</TableCell>
                  <TableCell align="right">{request.count}</TableCell>
                  <TableCell align="right">{request.conversion}</TableCell>
                  <TableCell align="right">{request.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={popularRequests.length}
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
