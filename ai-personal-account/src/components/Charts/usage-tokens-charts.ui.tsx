import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { generateMockGraphData } from '../../utils/helpers/mockGraphData';

export default function UsageTokensCharts() {
  const { t } = useTranslation();
  const [period, setPeriod] = useState<'7' | '30' | '90'>('7');
  const [chartData, setChartData] = useState(generateMockGraphData(7));

  useEffect(() => {
    const data = generateMockGraphData(parseInt(period));
    setChartData(data);
  }, [period]);
  const handlePeriodChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as '7' | '30' | '90');
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
        <Typography variant="h5">{t('Token Usage Stats')}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={period}
            label={t('period')}
            onChange={handlePeriodChange}
          >
            <MenuItem value={'7'}>7 days</MenuItem>
            <MenuItem value={'30'}>30 days</MenuItem>
            {/* <MenuItem value={'90'}>90 days</MenuItem> */}
          </Select>
        </FormControl>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <IconButton disabled>
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="body1" sx={{ margin: '0 10px' }}>
          {`${t('period')}: 01.02.2025 - 07.02.2027`}
          </Typography>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </Box>
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
            xAxis={[{ scaleType: 'band', data: chartData.labels }]}
            series={[
              { data: chartData.input, label: t('input'), stack: 'assets' },
              { data: chartData.output, label: t('output'), stack: 'assets' },
            ]}
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
