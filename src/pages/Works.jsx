import React from "react";
import { Link } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  return (
    <div>
      <h3>할일 목록</h3>
      {data.map((cur) => {
        return (
          <div key={cur.id}>
            {cur.id}&nbsp;
            <Link to={`/works/${cur.id}`}>{cur.todo}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
