import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ChatItem } from '../../interfaces/activity.interface';
import { IMgpChatAIMessage } from '../../interfaces/chats/mgp-chat.interface';

interface ChatPopupProps {
  open: boolean;
  onClose: () => void;
  chatId: string;
  chat: Array<ChatItem>;
  chatName: 'MGP';
}

const ChatPopup: React.FC<ChatPopupProps> = ({
  open,
  onClose,
  chatId,
  chat,
  // chatName,
}) => {
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
        <Box
          sx={{
            maxHeight: '80vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {chat.map((item, index) => {
            const isUser = item.username === 'USER';
            if (isUser) {
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
                  <Typography
                    variant="body2"
                    sx={{ overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              );
            } else {
              return (
                <ParseChatAiMessage
                  key={index}
                  chatName={'MGP'}
                  message={item.text}
                />
              );
            }
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ChatPopup;

function ParseChatAiMessage({
  chatName,
  message,
}: {
  chatName: 'MGP';
  message: string;
}) {
  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        bgcolor: 'grey.300',
        color: 'black',
        p: 1,
        borderRadius: 1,
        maxWidth: '90%',
      }}
    >
      {SwitchChatModel(chatName, message)}
    </Box>
  );
}

function SwitchChatModel(chatModel: 'MGP', message: string) {
  switch (chatModel) {
    case 'MGP':
      return parseMGPChat(message);
  }
}

function parseMGPChat(message: string) {
  const dict: Partial<Record<keyof IMgpChatAIMessage, string>> = {
    hotelname: 'Отель',
    route: 'Маршрут',
    dates: 'Даты',
    price: 'Цена',
    currency: 'Валюта',
    mealrussian: 'Питание',
    room: 'Комната',
    tourname: 'Тур',
    approve_tour_url: 'Ссылка на тур',
  };
  let textMessage: string | null = null;
  let objectMessage: IMgpChatAIMessage[] | null = null;

  try {
    const parsedMessage = JSON.parse(message);
    objectMessage = parsedMessage;
  } catch (error) {
    textMessage = message;
  }

  if (textMessage) {
    return <div>{textMessage}</div>;
  }
  if (objectMessage) {
    return (
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          width: '100%',
          overflowX: 'scroll',
          p: 0.5,
        }}
      >
        {objectMessage.map((el) => (
          <Card sx={{ minWidth: '90%' }} key={el.tourname}>
            <CardContent
              sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
            >
              <img
                src={el.picture_url}
                alt={el.hotelname}
                style={{ width: '100%', height: 'auto' }}
              />
              {(
                Object.entries(dict) as [
                  keyof IMgpChatAIMessage,
                  string | undefined,
                ][]
              ).map(([key, value]) => {
                // теперь key имеет тип keyof IMgpChatAIMessage
                return (
                  <Box
                    key={key}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <Typography variant="caption">{value + ':'}</Typography>
                    <Typography variant="body2">{el[key]}</Typography>
                  </Box>
                );
              })}
              <Typography variant="caption">{el.tourname}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }
}
