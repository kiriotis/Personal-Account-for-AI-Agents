import { useRef } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {}

interface Destination {
  filename: string;
  weights: string;
  link: string;
}

const BaseFile = [
  { name: 'File.txt', weights: '60 kb' },
  { name: 'kek.txt', weights: '54 kb' },
  { name: 'File.txt', weights: '51 kb' },
  { name: 'File2.txt', weights: '33 kb' },
  { name: 'File3.txt', weights: '28 kb' },
  { name: 'File4.txt', weights: '22 kb' },
];

export default function KnowledgeTab({}: Props) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log('Selected file:', selectedFile);
      // Here you would typically handle the file upload to the server
      // For now, we're just logging it to the console

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 1, sm: 2 },
        gap: 2,
      }}
    >
      <Typography variant="h5">{t('Knowledge Base')}</Typography>
      <Box
        sx={{
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <TableContainer sx={{ height: '100%' }}>
          <Table
            stickyHeader
            sx={{ minWidth: 250 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>{t('File name')}</TableCell>
                <TableCell align="right">{t('Weight')}</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  <Button variant="outlined" onClick={handleUploadClick}>
                    {t('Upload new File')}
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {BaseFile.map((BaseFile, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {BaseFile.name}
                  </TableCell>
                  <TableCell align="right">{BaseFile.weights}</TableCell>
                  <TableCell align="right">
                    <LaunchIcon></LaunchIcon>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" sx={{ gap: 1 }}>
                      <UpdateIcon></UpdateIcon>
                      {t('Update')}
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" sx={{ gap: 1 }}>
                      <DeleteIcon></DeleteIcon>
                      {t('Delete')}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
