import React from 'react';
import styles from './styles/GridContainer.module.css';

export default function GridContainer({left_content, right_content}) {

  return (
    <div className={styles["grid-container"]}>
      <div>
        {left_content}
      </div>
      <div>
        {right_content}
      </div>
    </div>
  );
}