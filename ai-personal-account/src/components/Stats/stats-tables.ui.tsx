import { Box } from '@mui/material';
import DestinationTable from './Stats-ui/destination-table';
import PopularRequests from './Stats-ui/popular-requests';
import TotalRequestsCard from './Tabs-ui/TotalRequestsCard';

interface iStatsTablesUi {}

export default function StatsTablesUi({}: iStatsTablesUi) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', gap: '1rem' }}>
        <TotalRequestsCard
          title={'Total requests'}
          value={'12'}
          capture={'23%'}
          isIncrease={true}
        ></TotalRequestsCard>
        <TotalRequestsCard
          title={'Total requests'}
          value={'14141123123123123'}
          capture={'1000%'}
          isIncrease={true}
        ></TotalRequestsCard>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <DestinationTable></DestinationTable>
        <PopularRequests></PopularRequests>
      </Box>
    </Box>
  );
}
