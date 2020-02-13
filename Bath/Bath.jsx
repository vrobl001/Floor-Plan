import * as React from "react";
import styles from './Bath.module.css'

function Bath(props) {
  return (
    <div className={styles.bath}>
      <h1>{props.size} Bath</h1>
    </div>
  );
}

export default Bath;