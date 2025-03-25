import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface TotalRequestsCardProps {
  title: string;
  value: string;
  capture: string;
  isIncrease: boolean;
}

export default function TotalRequestsCard(props: TotalRequestsCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        '& .MuiCardContent-root': {
          p: { xs: '8px', sm: '16px' },
          ':hover': {
            pb: 0,
          },
        },
      }}
    >
      <CardContent>
        {/* Адаптивный заголовок */}
        <Typography
          variant="h6"
          color="primary.main"
          sx={{
            pb: '6px',
            fontSize: {
              xs: '0.875rem', // маленький размер на мобильных
              sm: '1rem', // обычный размер на планшетах и выше
            },
          }}
        >
          {props.title}
        </Typography>

        {/* Адаптивное основное значение */}
        <Typography
          variant="body1"
          color="primary.main"
          sx={{
            fontSize: {
              xs: '1.2rem', // уменьшенный размер на мобильных
              sm: '2rem', // стандартный h4 на больших экранах
            },
          }}
        >
          {props.value}
        </Typography>

        {/* Адаптивный текст с иконкой */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            // position: { xs: 'absolute', sm: 'static' },
            // top: '6px',
            // right: '12px',
            gap: '2px',
          }}
        >
          <span>
            {!props.isIncrease ? (
              <ExpandMoreIcon color="error" fontSize="small" />
            ) : (
              <ExpandLessIcon color="success" fontSize="small" />
            )}
          </span>
          <Typography
            variant="body2"
            color={props.isIncrease ? 'success.main' : 'error.main'}
            sx={{
              display: 'flex',
              alignItems: 'center',

              fontSize: {
                xs: '0.75rem', // чуть меньше на мобильных
                sm: '0.875rem',
              },
            }}
          >
            {props.capture}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
