export interface BuysResponse {
  shopID:            string;
  date:              Date;
  idType:            string;
  idClient:          string;
  clientName:        ClientName;
  productsPurchased: ProductsPurchased;
}

export interface ClientName {
  name:     string;
  lastName: string;
}

export interface ProductsPurchased {
  product1: number;
  product2: number;
}
