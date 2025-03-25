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
        gap: '10px',
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '10px',
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
          height: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          // justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <DestinationTable></DestinationTable>
        {/* <PopularRequests></PopularRequests> */}
      </Box>
    </Box>
  );
}
