import Link from "next/link";
import classes from "./button.module.css";

function Button({ children, link }) {
  const onClick = () => {};

  if (link)
    return (
      <div className={classes.btnContainer}>
        <Link href={link} className={classes.btn}>
          {children}
        </Link>
      </div>
    );
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
