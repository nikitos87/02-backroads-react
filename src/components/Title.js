const Title = ({ main, sub }) => {
  return (
    <div className="section-title">
      <h2>
        {main} <span>{sub}</span>
      </h2>
    </div>
  );
};

export default Title;
