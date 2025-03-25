import { Box } from '@mui/material';
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
      <UsageTokensCharts />
      <UsageMessagesCharts />
    </Box>
  );
}
