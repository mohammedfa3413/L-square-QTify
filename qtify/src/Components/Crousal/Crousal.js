import React, { useEffect } from 'react';
import CrousalLeftNavigation from './CrousalLeftNavigation/CrousalLeftNavigation';
import CrousalRightNavigation from './CrousalRightNavigation/CrousalRightNavigation';
import { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Crousal.module.css';

const Control = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 1);
    }
  }, [swiper, data]); // Include 'swiper' and 'data' in the dependency array
};

function Crousal({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Control data={data} />
        <CrousalLeftNavigation />
        <CrousalRightNavigation />
        {data.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Crousal;
