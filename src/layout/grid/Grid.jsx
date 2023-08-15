import classes from "./grid.module.scss";
function Grid({ children, className }) {
  return <div className={`${classes.grid} ${className}`}>{children}</div>;
}

export default Grid;
