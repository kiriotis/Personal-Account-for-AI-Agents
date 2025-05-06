import { Box, Paper } from '@mui/material';
import UsageTokensCharts from '../../components/Charts/usage-tokens-charts.ui';
import UsageMessagesCharts from '../../components/Charts/usage-messages-charts.ui';

interface iUsage {}

export default function Usage({}: iUsage) {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto',
        gap: 2,
      }}
    >
      <Paper
        sx={{
          width: '100%',
          // height: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
        }}
      >
        <UsageTokensCharts />
        <UsageMessagesCharts />
      </Paper>
    </Box>
  );
}
