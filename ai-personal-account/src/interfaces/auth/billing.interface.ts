export interface IBillingDocument {
  title: string;
  link: string;
}

export interface IBillingResponse {
  data: IBillingDocument[];
  total: number;
}
