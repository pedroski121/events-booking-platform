export const queryKeys = {
  event: {
    all: () => ["events"] as const,
    single: (id: string) => ["events", id] as const,
  },
};
