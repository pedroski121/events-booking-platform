export const queryKeys = {
  event: {
    all: (page: number, search: string, category: string) =>
      ["events", page, search, category] as const,
    single: (id: string) => ["events", id] as const,
  },
};
