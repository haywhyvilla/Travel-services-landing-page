import classes from "./grid3col.module.scss";
function Grid3col({ children, className }) {
  return <div className={`${classes.grid} ${className}`}>{children}</div>;
}

export default Grid3col;
