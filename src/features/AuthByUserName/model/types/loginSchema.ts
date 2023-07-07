export interface LoginSchema {
  username: string;
  password: string;
  isLoggedIn?: boolean;
  error?: string;
}
