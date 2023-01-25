export interface PaginationResponse {
  _id:         string;
  idProduct:   string;
  name:        string;
  price:       number;
  inInventory: number;
  isEnabled:   boolean;
  max:         number;
  min:         number;
}
