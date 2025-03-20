export interface IStatsRequest {
  days?: 7 | 30 | 90;
}

export interface IStatsResponse {
  destination: {
    direction: string;
    n: number;
  };
  popular_requests: {
    request: string;
    n: number;
  };
  sales_dynamic: {
    date: string;
    n: number;
  }[];
}
