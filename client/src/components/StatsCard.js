import React from "react";
import reactstrap from "reactstrap";

function StatsCard(props) {
  return (
    <div>
      <div
        className="card text-white bg-danger mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header text-center">{props.name}</div>
        <div className="card-body">
          <p className="card-text text-center" style={{ fontSize: "30px" }}>
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
