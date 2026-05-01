import { eventApi } from "@/lib/api/event";
import { queryKeys } from "@/lib/api/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useSingleEvent = (id: string) => {
  return useQuery({
    queryKey: queryKeys.event.single(id),
    queryFn: () => eventApi.getSingle(id),
    staleTime: 5 * 60 * 1000,
  });
};
