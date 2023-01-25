export interface CreateProductCommand {
  shopID:      string;
  productID:   string;
  name:        string;
  inINventory: number;
  enabled:     boolean;
  max:         number;
  min:         number;
  price:       number;
}
