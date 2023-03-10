export interface ShopResponse {
  _id:      string;
  products: Products;
}

export interface Products {
  products: Map<string, Product>;
}

export interface Product {
  productID:   ProductID;
  name:        Name;
  inInventory: InInventory;
  isEnabled:   IsEnabled;
  max:         Max;
  min:         Min;
  price:       Price;
}

export interface InInventory {
  quantity: number;
}

export interface Max {
  quantity: number;
}
export interface Min {
  quantity: number;
}
export interface Price {
  quantity: number;
}

export interface IsEnabled {
  enable: boolean;
}

export interface Name {
  name: string;
}

export interface ProductID {
  uuid: string;
}
