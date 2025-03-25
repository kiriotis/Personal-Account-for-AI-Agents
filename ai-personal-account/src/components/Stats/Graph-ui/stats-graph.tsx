import { Box } from '@mui/material';
import TextChartsUi from '../../Charts/text-charts.ui';
import TextChartsConUi from '../../Charts/text-chartsCon.ui';

interface iStatsGraph {}

export default function StatsGraph({}: iStatsGraph) {
  const data = {
    2022: {
      labels: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      countries: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
    },
    2023: {
      labels: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      countries: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
    },
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

      }}
    >
      <TextChartsUi />
      <TextChartsConUi />
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          overflow: 'scroll',
        }}
      >
        <UsageCharts
          data={data}
          title={'Конверсия по странам'}
          series={[{ label: 'Получено' }, { label: 'Отправлено' }]}
        />
      </Box> */}
    </Box>
  );
}
