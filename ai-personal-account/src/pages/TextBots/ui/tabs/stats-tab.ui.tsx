import { Box, Tab, Tabs, tabsClasses } from '@mui/material';
import { useState } from 'react';
import StatsGraph from '../../../../components/Stats/stats-graph';
import StatsTablesUi from '../../../../components/Stats/stats-tables.ui';
import TotalRequestsCard from '../../../../components/Stats/Tabs-ui/TotalRequestsCard';

interface Props {}

export default function StatsTab({}: Props) {
  const [value, setValue] = useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          // justifyContent: { xs: 'center', sm: 'start' },
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
          <Tab value={1} label={'Таблицы'} />
          <Tab value={2} label={'Графики'} />
        </Tabs>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          p: { xs: 1, sm: 2, md: 4 },
        }}
      >
        {value === 1 ? <StatsTablesUi /> : null}
        {value === 2 ? <StatsGraph /> : null}
      </Box>
    </Box>
  );
}
