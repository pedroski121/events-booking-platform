import { useRouter, useSearchParams } from "next/navigation";
import { useEvents } from "@/hooks/event/useEvents";
import { EventHeader } from "@/components/event/EventHeader";
import { EventListing } from "@/components/event/EventListing";
import { Footer, ErrorState, Spinner, Pagination } from "@/components/global";

export const EventPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? 0);
  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";

  const { data, isError, isLoading, error } = useEvents(page, search, category);

  const changePage = (pageNumber: number) => {
    router.push(`?page=${pageNumber}`);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <ErrorState
        message={error.message}
        errorCodeMessage={
          "Status Code " + error.status + " - " + error?.data?.error
        }
      />
    );
  }

  return (
    <div>
      <EventHeader />

      {data && <EventListing events={data} />}

      <Pagination
        currentPage={data?.page.number || 0}
        totalPages={data?.page.totalPages || 1}
        onPageChange={(page: number) => changePage(page)}
      />
      <Footer />
    </div>
  );
};
