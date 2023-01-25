export interface BuyProductCommand {
  shopID:     string;
  date:       Date;
  idType:     string;
  idClient:   string;
  clientName: string;
  products:   Products;
}

export interface Products {
  products: Map<string, number>;
}
