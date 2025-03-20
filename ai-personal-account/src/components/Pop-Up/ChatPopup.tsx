import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ChatPopupProps {
  open: boolean;
  onClose: () => void;
  chatId: string;
}

const ChatPopup: React.FC<ChatPopupProps> = ({ open, onClose, chatId }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Chat ID: {chatId}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ maxHeight: 300, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
          {Array.from({ length: 12 }, (_, index) => {
            const isUser = index % 2 === 0;
            return (
              <Box
                key={index}
                sx={{
                  alignSelf: isUser ? 'flex-end' : 'flex-start',
                  bgcolor: isUser ? 'primary.main' : 'grey.300',
                  color: isUser ? 'white' : 'black',
                  p: 1,
                  borderRadius: 1,
                  maxWidth: '80%',
                }}
              >
                <Typography variant="body2">
                  {isUser ? 'User message' : 'Assistant message'} {index + 1}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ChatPopup;
