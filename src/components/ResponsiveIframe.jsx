import React from 'react';
import styles from './styles/ResponsiveIframe.module.css';

export default function ResponsiveIframe({src, padding_top}) {

  return (
    <div style={{paddingTop: padding_top}} className={styles["iframe-container"]}>
      <iframe src={src} max-height="523px" max-width="850px" width="100%" title="Interactive"></iframe>
    </div>
  );
}