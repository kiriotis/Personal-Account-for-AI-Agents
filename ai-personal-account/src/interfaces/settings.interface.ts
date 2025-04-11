export interface ISettingsResponse {
  company: string;
  email: string;
  password: string;
}

export interface ISettingsUpdateRequest {
  company?: string;
  email?: string;
  password?: string;
}
