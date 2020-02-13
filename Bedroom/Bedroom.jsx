import * as React from "react";
import styles from './Bedroom.module.css'

function Bedroom(props) {
  return (
    <div className={styles.bedroom} id={`bed-${props.bedNum}`}>
      <h1>Bedroom {props.bedNum}</h1>
    </div>
  );
}

export default Bedroom;
