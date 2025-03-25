import { Box, Tab, Tabs, tabsClasses } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StatsGraph from '../../../../components/Stats/Graph-ui/stats-graph';
import StatsTablesUi from '../../../../components/Stats/stats-tables.ui';
import TotalRequestsCard from '../../../../components/Stats/Tabs-ui/TotalRequestsCard';

interface Props {}

export default function StatsTab({}: Props) {
  const [value, setValue] = useState(1);
  const { t } = useTranslation();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        // flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 2 },
          p: { xs: 1, sm: 2 },
        }}
      >
        <TotalRequestsCard
          title={'Всего обращений'}
          value={'4,328'}
          capture={'+12.5% с прошлого месяца'}
          isIncrease={true}
        ></TotalRequestsCard>
        <TotalRequestsCard
          title={'Конверсия в бронирование'}
          value={'24.3%'}
          capture={'+3.2% с прошлого месяца'}
          isIncrease={true}
        ></TotalRequestsCard>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          p: { xs: 1, sm: 2 },
          justifyContent: { xs: 'center', sm: 'start' },
        }}
      >
        <Tabs
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab value={1} label={t('tables')} />
          <Tab value={2} label={t('Graphs')} />
        </Tabs>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexGrow: 1,
          overflow: 'auto',
          p: { xs: 1, sm: 2 },
        }}
      >
        {value === 1 ? <StatsTablesUi /> : null}
        {value === 2 ? <StatsGraph /> : null}
      </Box>
    </Box>
  );
}
