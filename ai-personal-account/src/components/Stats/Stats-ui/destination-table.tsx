import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface iDestinationTable {}

interface Destination {
  name: string;
  requests: number;
}

const destinations = [
  { name: 'Кемер, Турция', requests: 60 },
  { name: 'Шарм-Эль-Шейх, Египет', requests: 54 },
  { name: 'Дубай, ОАЭ', requests: 51 },
  { name: 'Алания, Турция', requests: 33 },
  { name: 'Адлер, Сочи', requests: 28 },
  { name: 'Судак, Крым', requests: 22 },
  { name: 'Кемер, Турция', requests: 60 },
  { name: 'Шарм-Эль-Шейх, Египет', requests: 54 },
  { name: 'Дубай, ОАЭ', requests: 51 },
  { name: 'Алания, Турция', requests: 33 },
  { name: 'Адлер, Сочи', requests: 28 },
  { name: 'Судак, Крым', requests: 22 },
  { name: 'Кемер, Турция', requests: 60 },
  { name: 'Шарм-Эль-Шейх, Египет', requests: 54 },
  { name: 'Дубай, ОАЭ', requests: 51 },
  { name: 'Алания, Турция', requests: 33 },
  { name: 'Адлер, Сочи', requests: 28 },
  { name: 'Судак, Крым', requests: 22 },
];

export default function DestinationTable({}: iDestinationTable) {
  return (
    <Box
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h5">Top destinations</Typography>
      <Box sx={{ maxHeight:{  xs: 150, sm: 150, md: 150, lg: 450 }, overflow: 'auto' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="right">Requests</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {destinations.map((destination, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {destination.name}
                  </TableCell>
                  <TableCell align="right">{destination.requests}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
