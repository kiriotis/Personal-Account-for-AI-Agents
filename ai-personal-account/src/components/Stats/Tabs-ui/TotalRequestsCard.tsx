import { Card, CardContent, Typography } from '@mui/material';

interface TotalRequestsCardProps {
  title: string;
  value: string;
  capture: string;
  isIncrease: boolean;
}

export default function TotalRequestsCard(props: TotalRequestsCardProps) {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent >
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="h4">{props.value}</Typography>
        <Typography
          variant="body2"
          color={props.isIncrease ? 'success' : 'error'}
        >
          {props.capture}
        </Typography>
      </CardContent>
    </Card>
  );
}
