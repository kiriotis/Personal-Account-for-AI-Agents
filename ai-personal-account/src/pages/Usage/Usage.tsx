import { Box } from '@mui/material';
import UsageCharts from '../../components/Charts/usage-charts.ui';

interface iUsage {}

export default function Usage({}: iUsage) {
  return (
    <Box sx={{ p: 4 }}>
      <UsageCharts />
    </Box>
  );
}
