import { ErrorData } from "./base";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: ErrorData,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const parseResponse = async <T>(res: Response): Promise<T> => {
  const contentType = res.headers.get("content-type") ?? "";
  const isJson =
    contentType.includes("application/json") &&
    !(res.status === 204 || res.headers.get("content-length") === "0");

  const data = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    throw new ApiError(
      res.status,
      isJson ? (data?.message ?? res.statusText) : res.statusText,
      data,
    );
  }
  return data as T;
};

export const get = async <T>(
  path: string,
  params?: Record<string, string>,
  init?: RequestInit,
): Promise<T> => {
  const url = new URL(`${BASE_URL}${path}`);

  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      return url.searchParams.set(k, v);
    });
  }

  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  return parseResponse<T>(res);
};
