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

type SeriesItem = {
  dataKey: string;
  label: string;
  valueFormatter: (value: number | null) => string;
};

export const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    moskow: 41,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    minsk: 48,
    month: 'Dec',
  },
];

export function valueFormatter(value: number | null): string {
  return `${value}`;
}

type TextChartsProps = {};

export default function TextChartsUi({}: TextChartsProps) {
  const [series, setSeries] = useState<SeriesItem[]>([]);
  const [year, setYear] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const monthsPerPage = 4;
  const { t } = useTranslation();

  // Calculate total pages
  const totalPages = Math.ceil(dataset.length / monthsPerPage);

  // Get current slice of data
  const currentData = dataset.slice(
    currentPage * monthsPerPage,
    (currentPage + 1) * monthsPerPage
  );

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  useEffect(() => {
    // Collect all unique keys, excluding 'month'
    const keys = new Set<string>();
    dataset.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (key !== 'month') {
          keys.add(key);
        }
      });
    });

    // Create series array based on collected keys
    const newSeries: SeriesItem[] = Array.from(keys).map((key) => ({
      dataKey: key,
      label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
      valueFormatter,
    }));

    setSeries(newSeries);
  }, []);

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
        }}
      >
        <Typography variant="h5">{t('requests')}</Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={year}
            label="Year"
            onChange={handleYearChange}
          >
            <MenuItem value={10}>2020</MenuItem>
            <MenuItem value={20}>2021</MenuItem>
            <MenuItem value={30}>2022</MenuItem>
            <MenuItem value={40}>2023</MenuItem>
            <MenuItem value={50}>2024</MenuItem>
            <MenuItem value={60}>2025</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Chart with paginated data */}
      <BarChart
        dataset={currentData}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
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
          // pointerEvents: { xs: 'none', sm: 'auto' },
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
