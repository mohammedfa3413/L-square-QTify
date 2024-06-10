import React from 'react'
import styles from "./Navbar.module.css"
import Button from './Button'
import Logo from './Logo'

function Navbar() {
  return (
    <div className={styles.nav}>
    <Logo/>
    <Button Child="Give Feedback"/>
    
    </div> 
  )
}

export default Navbar





