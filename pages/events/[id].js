import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

const SpecificId = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);
  const { title, date, location, image } = event;
  if (!event) {
    return <p>No Event Found</p>;
  }

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        title={title}
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default SpecificId;
