import React from 'react'
import styles from "./Button.module.css"

function Button({Child}) {
  return (
    <div className={styles.move}>
    <button className={styles.button}>{Child}</button>
    </div>
  )
}

export default Button







