
export interface ProductResponse {
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
