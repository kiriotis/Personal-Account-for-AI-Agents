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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 6, sm: 4 },
        overflow: 'auto',
      }}
    >
     

      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'flex-start',
          gap: { xs: 6, sm: 1 },
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
            gap: { xs: 6, sm: 1 },
            overflow: 'auto',
          }}
        >
          <DestinationTable></DestinationTable>
          <PopularRequests></PopularRequests>
        </Box>
      </Box>
    </Box>
  );
}
