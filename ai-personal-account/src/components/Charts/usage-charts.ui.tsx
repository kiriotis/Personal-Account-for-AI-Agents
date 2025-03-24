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
  series: { label: string }[];
}

export default function UsageCharts({ data, title, series }: UsageChartsProps) {
  const [days, setDays] = useState<7 | 30 | 90>(7);

  const handleDaysChange = (
    event: React.MouseEvent<HTMLElement>,
    newDays: 7 | 30 | 90 | null
  ) => {
    if (newDays !== null) {
      setDays(newDays);
    }
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <ToggleButtonGroup
          value={days}
          exclusive
          onChange={handleDaysChange}
          aria-label="days"
          sx={{ justifySelf: 'center', alignSelf: 'center' }}
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

      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <BarChart
            xAxis={[{ scaleType: 'band', data: data[days].labels }]}
            series={series.map((s, index) => ({
              data: index === 0 ? data[days].input : data[days].output,
              label: s.label,
              stack: 'assets',
            }))}
            borderRadius={6}
            sx={{
              // pointerEvents: { xs: 'none', sm: 'auto' },
              transition: { xs: 'none', sm: 'all 0.3s ease' },
              width: '100%',
            }}
            height={300}
          />
        </Box>
      </Box>
    </Box>
  );
}
