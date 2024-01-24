export interface AuthenticationSchema {
  username: string;
  password: string;
  isLoading: boolean;
  loadingError?: string;
  isSending: boolean;
  sendingError?: string;
}
