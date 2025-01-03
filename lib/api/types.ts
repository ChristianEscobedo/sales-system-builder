export interface APIError {
  error: string;
  details?: string;
  code?: string;
}

export interface APIResponse<T> {
  data?: T;
  error?: APIError;
}