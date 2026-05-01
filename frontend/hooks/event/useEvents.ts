import { PaginatedBase } from "@/lib/api/base";
import { ApiError } from "@/lib/api/client";
import { eventApi, EventSummary } from "@/lib/api/event";
import { queryKeys } from "@/lib/api/queryKeys";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useEvents = (page = 0, search = "", category = "", limit = 9) => {
  return useQuery<PaginatedBase<EventSummary[]>, ApiError>({
    queryKey: queryKeys.event.all(page, search, category),
    queryFn: () => eventApi.getAll(page, limit, search, category),
    placeholderData: keepPreviousData,
  });
};
