import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';

export default function UsageCharts() {
  const [days, setDays] = useState<number>(7);

  const handleDaysChange = (
    event: React.MouseEvent<HTMLElement>,
    newDays: number | null
  ) => {
    if (newDays !== null) {
      setDays(newDays);
    }
  };

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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5">
          {'Статистика по кол-ву использованных токенов'}
        </Typography>
        <ToggleButtonGroup
          value={days}
          exclusive
          onChange={handleDaysChange}
          aria-label="days"
          sx={{ alignSelf: 'flex-end' }}
        >
          <ToggleButton value={7} aria-label="7 days">
            7 дней
          </ToggleButton>
          <ToggleButton value={30} aria-label="30 days">
            30 дней
          </ToggleButton>
          <ToggleButton value={90} aria-label="90 days">
            90 дней
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <BarChart
          xAxis={[{ scaleType: 'band', data: data[days].labels }]}
          series={[
            { data: data[days].input, label: 'Input Tokens', color: 'blue' },
            { data: data[days].output, label: 'Output Tokens', color: 'green' },
          ]}
          sx={{ width: '100%' }}
          height={300}
        />
      </Box>
    </Box>
  );
}
