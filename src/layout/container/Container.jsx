
import classes from "./container.module.scss";
function Container({ children, className }) {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
}

export default Container;
