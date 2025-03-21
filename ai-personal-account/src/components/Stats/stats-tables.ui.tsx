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
        gap: '10px',

      }}
    >
      <Box sx={{ width: '100%', display: 'flex', gap: '10px' }}>
        <TotalRequestsCard
          title={'Total requests'}
          value={'12'}
          capture={'23%'}
          isIncrease={true}
        ></TotalRequestsCard>
        <TotalRequestsCard
          title={'Total requests'}
          value={'14141123'}
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
          gap: '10px',
        }}
      >
        <DestinationTable></DestinationTable>
        <PopularRequests></PopularRequests>
      </Box>
    </Box>
  );
}
