interface Page {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface Base<T> {
  data: T;
  success: boolean;
  message: string;
}

export interface PaginatedBase<T> {
  content: T;
  page: Page;
}

export interface ErrorData {
  path: string;
  error: string;
  message: string;
  timestamp: string;
  status: number;
}
