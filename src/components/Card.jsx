import React from "react";

function Card(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.icon}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>{props.info}</dd>
      </div>
    </dl>
  );
}

export default Card;
