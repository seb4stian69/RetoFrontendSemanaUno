export interface UserResponse {
  uuid:     UUID;
  name:     Name;
  email:    string;
  username: string;
}

export interface Name {
  firstname: string;
  lastname:  string;
}

export interface UUID {
  type:   string;
  number: string;
}
