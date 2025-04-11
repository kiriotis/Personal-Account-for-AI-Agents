export interface IActivityResponse {
  data: {
    datetime: string;
    platform: string;
    status: string;
    chat: {
      datetime: string;
      username: string;
      text: string;
    };
  }[];
  total: number;
}
