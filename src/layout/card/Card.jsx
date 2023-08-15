import classes from './card.module.scss';
function Card({children, className}) {
  return (
    <section className={`${classes.card} ${className}`}>{children}</section>
  )
}

export default Card