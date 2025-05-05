export interface IStatsRequest {
  days?: 7 | 30 | 90;
}

export interface Destination {
  n: number;
  direction: string;
}

export interface CountryCount {
  n: number;
  country: string;
}

export interface PopularRequest {
  n: number;
  request: string;
}

export interface IStatsResponse {
  destinations: Destination[];
  n_by_countries: {
    [key: string]: CountryCount[];
  };
  popular_requests: PopularRequest[];
}
