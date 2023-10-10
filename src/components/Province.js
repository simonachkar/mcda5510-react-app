import { useState } from "react";

const Province = (props) => {
  const [isShowCapital, setIsShowCapital] = useState(false);

  return (
    <div className="province-container" key={props.name}>
      <img alt={`${props.name}'s Flag`} width={125} src={props.flagUrl} />
      <div>
        <h3>{props.name}</h3>
        {isShowCapital ? <p>{props.capital}</p> : undefined}
      </div>
      <button
        onClick={() => setIsShowCapital(!isShowCapital)}
        className={isShowCapital ? "btn-capital-hide" : "btn-capital-show"}
      >
        {isShowCapital ? "Hide Capital" : "Show Capital"}
      </button>
    </div>
  );
};

export default Province;
