import EventItem from "./event-item";

function EventList({ items }) {
  return (
    <ul>
      {items.map(({ id, title, location, date, image }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          location={location}
          date={date}
          image={image}
        />
      ))}
    </ul>
  );
}

export default EventList;
