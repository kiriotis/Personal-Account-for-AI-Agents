import { Box } from '@mui/material';
import UsageCharts from '../../components/Charts/usage-charts.ui';

interface iUsage {}

export default function Usage({}: iUsage) {
  const generateMockData = (days: number) => {
    const labels = Array.from({ length: days }, (_, i) => `${i + 1}.02`);
    const input = Array(days)
      .fill(0)
      .map(() => Math.floor(Math.random() * 5000));
    const output = Array(days)
      .fill(0)
      .map(() => Math.floor(Math.random() * 5000));
    return { labels, input, output };
  };

  const data: Record<
    number,
    { labels: string[]; input: number[]; output: number[] }
  > = {
    7: generateMockData(7),
    30: generateMockData(30),
    90: generateMockData(90),
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'scroll',
      }}
    >
      <UsageCharts
        data={data}
        title={'Статистика по кол-ву использованных токенов'}
        series={[
          { label: 'Вход' },
          { label: 'Выход' },
        ]}
      />
      <UsageCharts
        data={data}
        title={'Статистика по кол-ву сообщений'}
        series={[
          { label: 'Получено' },
          { label: 'Отправлено' },
        ]}
      />
    </Box>
  );
}
