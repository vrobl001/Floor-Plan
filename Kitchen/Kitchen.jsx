import * as React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
  return (
    <div id="kitchen">
      <Oven />
      <Sink />
      <div id="kitchen-floor">
        <h1>Kitchen</h1>
      </div>
    </div>
  );
}

export default Kitchen;
