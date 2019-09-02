import React from "react";
import reactstrap from "reactstrap";

function StatsCard() {
  return (
    <div>
      <div
        className="card text-white bg-danger mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header text-center">Current Streak</div>
        <div className="card-body">
          <p className="card-text text-center" style={{ fontSize: "30px" }}>
            12
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
