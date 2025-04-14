import LaunchIcon from '@mui/icons-material/Launch';
import { Box, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
interface iBilling {}

const billingData = [
  {
    name: 'Договор по номеру 1234 от 22032',
    link: 'https://www.company.com',
  },
  {
    name: 'Company2',
    link: 'https://www.company.com',
  },
];

export default function Billing({}: iBilling) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Typography variant="h5">{t('Billing settings')}</Typography>
      {billingData.map((item) => (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <TextField
            sx={{ width: { xs: '100%', sm: '50%' } }}
            disabled
            label={item.name}
            variant="standard"
            margin="normal"
          />
          <a target="_blank" href={item.link}>
            <LaunchIcon></LaunchIcon>
          </a>
        </Box>
      ))}
    </Box>
  );
}
