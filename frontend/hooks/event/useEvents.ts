import { PaginatedBase } from "@/lib/api/base";
import { ApiError } from "@/lib/api/client";
import { eventApi, EventSummary } from "@/lib/api/event";
import { queryKeys } from "@/lib/api/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useEvents = () => {
  return useQuery<PaginatedBase<EventSummary[]>, ApiError>({
    queryKey: queryKeys.event.all(),
    queryFn: () => eventApi.getAll(),
  });
};
