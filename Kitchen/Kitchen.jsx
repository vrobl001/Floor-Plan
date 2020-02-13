import * as React from "react";
import Oven from "../Oven/Oven";
import Sink from "../Sink/Sink";
import styles from './Kitchen.module.css'

function Kitchen() {
  return (
    <div className={styles.kitchen} id="kitchen">
      <Oven />
      <Sink />
      <div id="kitchen-floor">
        <h1>Kitchen</h1>
      </div>
    </div>
  );
}

export default Kitchen;
