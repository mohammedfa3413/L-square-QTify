import React from 'react'
import styles from "./Button.module.css"

function Button({Child}) {
  return (
    
    <button className={styles.button}>{Child}</button>
  
  )
}

export default Button







