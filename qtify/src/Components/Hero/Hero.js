import React from 'react'
import headphones from '../../assets/vibrating-headphone 1.png'
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img className={styles.img} src={headphones} width={122} alt='phones'/>
      </div>
    </div>
  )
}

export default Hero
