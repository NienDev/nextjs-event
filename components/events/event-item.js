import Link from "next/link";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css";

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const address = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <div className={classes.img}>
        <img src={"/" + image} alt={title} />
      </div>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.date}>
            <time>{date}</time>
          </div>
          <div className={classes.address}>
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
