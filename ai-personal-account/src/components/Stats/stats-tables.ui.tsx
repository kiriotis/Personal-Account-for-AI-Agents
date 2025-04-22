import { Box } from '@mui/material';
import DestinationTable from './Stats-ui/destination-table';
import PopularRequests from './Stats-ui/popular-requests';
import { t } from 'i18next';
import TotalRequestsCard from './Tabs-ui/TotalRequestsCard';

interface iStatsTablesUi {}

export default function StatsTablesUi({}: iStatsTablesUi) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 6, sm: 4 },

      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 2 },
          // p: { xs: 1, sm: 2 },
        }}
      >
        <TotalRequestsCard
          title={t('stats.totalRequests')}
          value={'4,328'}
          capture={'+12.5%'}
          isIncrease={true}
        ></TotalRequestsCard>
        <TotalRequestsCard
          title={t('stats.conversionToBooking')}
          value={'24.3%'}
          capture={'+3.2%'}
          isIncrease={true}
        ></TotalRequestsCard>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'flex-start',
          gap: { xs: 6, md: 1 },
          overflow: { md: 'hidden' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'flex-start',
            gap: { xs: 6, md: 1 },

          }}
        >
          <DestinationTable></DestinationTable>
          <PopularRequests></PopularRequests>
        </Box>
      </Box>
    </Box>
  );
}
