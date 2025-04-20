import { Box, Typography } from '@mui/material';
import { axisClasses, BarChart } from '@mui/x-charts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ChartDataItem {
  direction: string;
  conversion: number;
}

type SeriesItem = {
  dataKey: keyof ChartDataItem;
  label: string;
  valueFormatter: (value: number | null) => string;
};

export function valueFormatter(value: number | null): string {
  return `${value}%`;
}

const dataset = [
  { direction: 'Москва', conversion: 20.0 },
  { direction: 'Стамбул', conversion: 35.5 },
  { direction: 'Минск', conversion: 26.89 },
  { direction: 'Санкт-Петербург', conversion: 18.3 },
  { direction: 'Сочи', conversion: 42.1 },
  { direction: 'Казань', conversion: 15.7 },
  { direction: 'Новосибирск', conversion: 32.4 },
  { direction: 'Сибирь', conversion: 22.7 },
  { direction: 'Гродно', conversion: 22.7 },
  { direction: 'Кеокльдесина', conversion: 22.7 },
  { direction: 'Городина', conversion: 152.7 },
];

// Сортируем данные по убыванию conversion
const sortedDataset = [...dataset].sort((a, b) => b.conversion - a.conversion);

const chartSetting = {
  yAxis: [
    {
      label: 'Conversion (%)',
    },
  ],
  height: 450,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
    pointerEvents: { xs: 'none', sm: 'auto' },
  },
};

export default function ConversionChart() {
  const { t } = useTranslation();

  const [series] = useState<SeriesItem[]>([
    {
      dataKey: 'conversion',
      label: 'Conversion Rate',
      valueFormatter: valueFormatter,
    },
  ]);

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
      <Typography variant="h5">{t('conversion')}</Typography>
      <BarChart
        dataset={sortedDataset} // Используем отсортированный массив
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'direction',
          },
        ]}
        borderRadius={8} 
        series={series}
        {...chartSetting}
      />
    </Box>
  );
}
