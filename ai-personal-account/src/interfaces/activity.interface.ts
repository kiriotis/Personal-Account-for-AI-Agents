interface ChatItem {
  datetime: string;
  username: string;
  text: string;
}

export interface Activity {
  last_update: string;
  platform: string;
  status: string;
  chat: Array<ChatItem>;
}

export interface ActiviyResponse {
  data: Array<Activity>;
  total: number;
}
