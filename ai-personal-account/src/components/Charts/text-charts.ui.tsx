import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Typography,
} from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetStatsQuery } from '../../services/stats.service';

type SeriesItem = {
  dataKey: string;
  label: string;
  valueFormatter: (value: number | null) => string;
};

export function valueFormatter(value: number | null): string {
  return `${value}`;
}

type TextChartsProps = {};

export default function TextChartsUi({}: TextChartsProps) {
  const { data: statsData, isLoading } = useGetStatsQuery();
  const { t } = useTranslation();

  // Получаем список всех месяцев
  const months = Object.keys(statsData?.n_by_countries || {});
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  // Автоматически выбираем первый доступный месяц
  useEffect(() => {
    if (months.length > 0 && !selectedMonth) {
      setSelectedMonth(months[0]);
    }
  }, [months, selectedMonth]);

  // Обработчик изменения месяца
  const handleMonthChange = (event: SelectChangeEvent) => {
    setSelectedMonth(event.target.value as string);
  };

  // Формируем данные для графика по выбранному месяцу
  const monthData = statsData?.n_by_countries[selectedMonth] || [];
  const chartData = monthData.map(({ country, n }) => ({
    country,
    value: n,
  }));

  // series для BarChart
  const series: SeriesItem[] = [
    {
      dataKey: 'value',
      label: t('requests'),
      valueFormatter,
    },
  ];

  // Пагинация по странам (если нужно)
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(chartData.length / itemsPerPage);
  const currentData = chartData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        p: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          gap: 2,
        }}
      >
        <Typography variant="h5">{t('requests')}</Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="month-select-label">Month</InputLabel>
          <Select
            labelId="month-select-label"
            id="month-select"
            value={selectedMonth}
            label="Month"
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Chart with paginated data */}
      <BarChart
        dataset={currentData}
        xAxis={[{ scaleType: 'band', dataKey: 'country' }]}
        series={series}
        borderRadius={8}
        yAxis={[
          {
            label: 'Requests',
            position: 'none',
          },
        ]}
        height={450}
        sx={{
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-10px, 0)',
          },
        }}
      />

      {/* Pagination controls */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <Button
          variant="outlined"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeftIcon />
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>
            {currentPage + 1} / {totalPages}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
    </Box>
  );
}
