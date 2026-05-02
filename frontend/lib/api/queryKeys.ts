export const queryKeys = {
  event: {
    all: (
      page: number,
      search: string,
      category: string,
      dateFrom: string,
      dateTo: string,
    ) => ["events", page, search, category, dateFrom, dateTo] as const,
    single: (id: string) => ["events", id] as const,
  },
};
