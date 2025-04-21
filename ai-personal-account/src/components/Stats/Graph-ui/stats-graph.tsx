import { Box } from '@mui/material';
import TextChartsUi from '../../Charts/text-charts.ui';
import TextChartsConUi from '../../Charts/text-chartsCon.ui';

interface iStatsGraph {}

export default function StatsGraph({}: iStatsGraph) {
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
