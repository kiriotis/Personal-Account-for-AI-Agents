export interface IUsageRequest {
  type: 'tokens' | 'messages';
  days: 7 | 30 | 90;
}

export interface IUsageResponse {
  // Уточните структуру ответа, если она известна
  [key: string]: any;
}
