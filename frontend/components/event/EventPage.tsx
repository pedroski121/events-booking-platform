import { useEvents } from "@/hooks/event/useEvents";
import { EventHeader } from "@/components/event/EventHeader";
import { EventListing } from "@/components/event/EventListing";
import { Footer, ErrorState, Spinner } from "@/components/global";
import Pagination from "@/components/global/Pagination";

export const EventPage = () => {
  const { data, isError, isLoading, error } = useEvents();

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

      <Footer />
    </div>
  );
};
