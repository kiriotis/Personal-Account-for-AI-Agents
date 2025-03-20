import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';

interface UsageChartsProps {
  data: Record<number, { labels: string[]; input: number[]; output: number[] }>;
  title: string;
}

export default function UsageCharts({ data, title }: UsageChartsProps) {
  const [days, setDays] = useState<number>(7);

  const handleDaysChange = (
    event: React.MouseEvent<HTMLElement>,
    newDays: number | null
  ) => {
    if (newDays !== null) {
      setDays(newDays);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h5">{title}</Typography>
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
          borderRadius={6}
          sx={{
            width: '100%',
          }}
          height={300}
        />
      </Box>
    </Box>
  );
}
