import * as React from "react";
import Bedroom from "../Bedroom/Bedroom";
import Kitchen from "../Kitchen/Kitchen";
import Bath from "../Bath/Bath";
import LivingRoom from "../LivingRoom/LivingRoom";
import styles from './FloorPlan.module.css'

function FloorPlan() {
  return (
    <div className={styles.floorPlan}>
      <Bedroom bedNum="1" />
      <Kitchen />
      <Bath size="Full" />
      <Bedroom bedNum="2" />
      <LivingRoom />
      <Bath size="Half" />
      <Bedroom bedNum="3" />
    </div>
  );
}

export default FloorPlan;
