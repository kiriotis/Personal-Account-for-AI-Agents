import {
  Avatar,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';
import { useMemo, useState } from 'react';
import ChatPopup from '../Pop-Up/ChatPopup';
import { useTranslation } from 'react-i18next';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { GridColDef } from '@mui/x-data-grid';
import { Activity, ChatItem } from '../../interfaces/activity.interface';
import formatDateTime from '../../utils/helpers/format-date';

interface Props {
  columns: GridColDef[];
  rows: Activity[];
}

// function setVariant(variant: unknown) {
//   switch (variant) {
//     case 'Paid':
//       return 'success';
//     case 'Booked':
//       return 'warning';
//     case 'Clicked booking':
//       return 'info';
//     case 'Lost':
//       return 'error';
//     default:
//       return 'info';
//   }
// }

export default function ActivityTableUi({ rows }: Props) {
  const { t } = useTranslation('translation');
  const [page, setPage] = useState(0);
  const rowsPerPage = 10; // Фиксированное значение - 10 строк на странице

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Вычисляем отображаемые строки
  const visibleRows =
    rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) || [];

  const renderPlatformCell = (params: string) => {
    return (
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            fontSize: '14px',
            backgroundColor: '#C4C4C4',
          }}
          alt={params}
        >
          <MarkUnreadChatAltOutlinedIcon
            sx={{ width: 20, height: 20, strokeWidth: 1, fontSize: '14px' }}
          />
        </Avatar>
        <span>{params}</span>
      </Box>
    );
  };

  // const renderStatusCell = (params: string) => {
  //   return <Chip label={params || 'info'} color={setVariant(params)} />;
  // };

  const renderChatCell = (params: {
    id: string;
    value: string;
    chat: Array<ChatItem>;
  }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{params.value}</Box>
        <IconButton onClick={handleClickOpen} aria-label="open-chat">
          <OpenInNewIcon />
        </IconButton>

        <ChatPopup
          open={open}
          onClose={handleClose}
          chatId={params.id}
          chat={params.chat}
          chatName="MGP"
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TableContainer
        sx={{
          flex: 1,
          overflow: 'auto',
        }}
      >
        <Table
          stickyHeader
          sx={{ minWidth: 250 }}
          size="small"
          aria-label="activity table"
        >
          <TableHead
            sx={{
              zIndex: 1,
              backgroundColor: 'background.paper',
            }}
          >
            <TableRow>
              <TableCell>{t('tables-activity.date')}</TableCell>
              <TableCell>
                {t('tables-activity.platform')}
                {/* <IconButton aria-label="filter" size="small">
                  <FilterListIcon />
                </IconButton> */}
              </TableCell>
              {/* <TableCell>
                {t('tables-activity.status')}
                <IconButton aria-label="filter" size="small">
                  <FilterListIcon />
                </IconButton>
              </TableCell> */}
              <TableCell>
                {t('tables-activity.chat')}
                {/* <IconButton aria-label="filter" size="small">
                  <FilterListIcon />
                </IconButton> */}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((el, index) => {
              // Форматируем дату последнего обновления
              const formattedDate = useMemo(
                () => formatDateTime(el.last_update),
                [el.last_update]
              );

              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell scope="row">{formattedDate}</TableCell>
                  <TableCell scope="row">
                    {renderPlatformCell(el.platform)}
                  </TableCell>
                  {/* <TableCell scope="row">
                {renderStatusCell(el.status || '')}
              </TableCell> */}
                  <TableCell scope="row">
                    {renderChatCell({
                      id: String(index),
                      value: '',
                      chat: el.chat,
                    })}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[]} // Скрываем выбор количества строк
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} ${t('of')} ${count}`
        }
      />
    </Box>
  );
}
