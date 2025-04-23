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
import { useGetUsageTokenQuery } from '../../services/usage.service';
import formatDateToISO from '../../shared/lib/format-date-to-ISO';
import CircularProgress from '@mui/material/CircularProgress';

export default function UsageTokensCharts() {
  const today = new Date();
  const { t } = useTranslation();
  const [period, setPeriod] = useState<'7' | '30' | '90'>('7');
  const [startDate, setStartDate] = useState<Date>(today);

  // Обработчики для пагинации по датам
  const handlePrevPeriod = () => {
    setStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - parseInt(period));
      return newDate;
    });
  };

  const handleNextPeriod = () => {
    setStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + parseInt(period));
      // Не даём уйти в будущее
      return newDate > today ? today : newDate;
    });
  };

  // Сброс startDate при смене периода
  useEffect(() => {
    setStartDate(today);
  }, [period]);

  const {
    data: tockenData,
    isLoading,
    isFetching,
  } = useGetUsageTokenQuery({
    type: 'messages',
    days: period,
    start_date: formatDateToISO(startDate),
  });

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
          <InputLabel id="demo-simple-select-label">{t('period')}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={period}
            label={t('period')}
            onChange={handlePeriodChange}
          >
            <MenuItem value={'7'}>{`7 ${t('days')}`}</MenuItem>
            <MenuItem value={'30'}>{`30 ${t('days')}`}</MenuItem>
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
          <IconButton onClick={handlePrevPeriod}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="body1" sx={{ margin: '0 10px' }}>
            {`${t('period')}: ${formatDateToISO(startDate)} - ${formatDateToISO(
              (() => {
                const end = new Date(startDate);
                end.setDate(end.getDate() + parseInt(period) - 1);
                return end > today ? today : end;
              })()
            )}`}
          </Typography>
          <IconButton
            onClick={handleNextPeriod}
            disabled={formatDateToISO(startDate) === formatDateToISO(today)}
          >
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
            px: 3,
            position: 'relative',
            minHeight: 320,
          }}
        >
          {isLoading || isFetching ? (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.7)',
              }}
            >
              <CircularProgress size={64} />
            </Box>
          ) : null}
          {(() => {
            const usageArr = Array.isArray(tockenData?.data)
              ? tockenData.data
              : [];
            if (usageArr.length === 0 && !isLoading) {
              return (
                <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
                  Нет данных для отображения
                </Typography>
              );
            }

            const labels = usageArr.map((item) => item.day);
            const input = usageArr.map((item) => item.n_input);
            const output = usageArr.map((item) => item.n_output);
            return (
              <BarChart
                disableAxisListener={true}
                hideLegend={true}
                xAxis={[
                  {
                    scaleType: 'band',
                    data: labels,
                  },
                ]}
                yAxis={[{ position: 'none' }]}
                series={[
                  { data: input, label: t('input'), stack: 'assets' },
                  { data: output, label: t('output'), stack: 'assets' },
                ]}
                borderRadius={6}
                sx={{
                  transition: { xs: 'none', sm: 'all 0.3s ease' },
                  width: '100%',
                }}
                height={300}
              />
            );
          })()}
        </Box>
      </Box>
    </Box>
  );
}
