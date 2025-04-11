export interface IKbFile {
  id: string;
  filename: string;
  size: number;
  link: string;
}

export interface IKbListResponse {
  data: IKbFile[];
  total: number;
}

export interface IKbUploadRequest {
  file: File; // Используется тип File для загрузки файлов
}

export interface IKbUploadResponse {
  status_code: number;
  message: string;
  extra: {
    link: string;
  };
}
