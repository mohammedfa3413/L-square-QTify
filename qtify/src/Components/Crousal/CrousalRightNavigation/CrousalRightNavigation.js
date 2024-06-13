// import React, { useEffect, useState } from 'react'
// import {useSwiper} from 'swiper/react'
// import styles from "./CrousalRightNavigation.module.css"
// import { ReactComponent as Rightarrow } from "../../../assets/Rightarrow.svg"

// function CrousalRightNavigation() {
//   const swiper = useSwiper();
//   const [isEnd ,setEnd] = useState(swiper.isEnd);

//   useEffect(()=>{
//     swiper.on("slideChange",function(){
//       setEnd(swiper.isEnd)
//     })
//   },[])
//   return (
//     <div className={styles.rightNavigation}>
//       {!isEnd && <Rightarrow onClick={()=>swiper.slideNext()}/>}
//     </div>
//   )
// }

// export default CrousalRightNavigation;













import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from "./CrousalRightNavigation.module.css";
import { ReactComponent as Rightarrow } from "../../../assets/Rightarrow.svg";

function CrousalRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    // Clean up the event listener on unmount
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]); // Include 'swiper' in the dependency array

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <Rightarrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default CrousalRightNavigation;
