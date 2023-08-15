import "./title.scss";

const Title = ({ title, subtitle, smalltitle }) => {
  return (
    <div className="title">
      <h2 className="title--main"> {title} </h2>
      <h3 className="title--small">{smalltitle}</h3>
      <p className="title--sub"> {subtitle} </p>
    </div>
  );
};

export default Title;
