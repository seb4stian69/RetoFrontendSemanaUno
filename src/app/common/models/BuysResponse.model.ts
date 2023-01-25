export interface BuysResponse {
  shopID:            string;
  date:              Date;
  idType:            string;
  idClient:          string;
  clientName:        ClientName;
  productsPurchased: any;
}

export interface ClientName {
  name:     string;
  lastName: string;
}

export interface ProductsPurchased {

  products: Map<string, number>

}
