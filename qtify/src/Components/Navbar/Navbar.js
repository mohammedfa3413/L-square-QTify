import React from 'react'

import styles from "./Navbar.module.css"
import Button from './Button'

function Navbar() {
  return (
    <>
    <div className={styles.nav}>
    
    <Button Child="Give Feedback"/>
    </div>
    </>
  )
}

export default Navbar
