import React from 'react'
import styles from "./Navbar.module.css"
import Button from './Button'
import Logo from './Logo'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div className={styles.nav}>
    <Logo/>
    <SearchBar keyword="search a album of your choice"/>
    <Button Child="Give Feedback"/>
    
    
    </div> 
  )
}

export default Navbar





