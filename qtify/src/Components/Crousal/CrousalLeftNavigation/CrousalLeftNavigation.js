import React, { useEffect, useState } from 'react'
import {useSwiper} from 'swiper/react'
import styles from "./CrousalLeftNavigation.module.css"
import { ReactComponent as Leftarrow } from "../../../assets/Leftarrow.svg"

function CrousalLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning ,setBegininng] = useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange",function(){
      setBegininng(swiper.isBeginning)
    })
  })
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <Leftarrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default CrousalLeftNavigation
