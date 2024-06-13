import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Session from '../../Components/Session/Session'
import { useOutletContext } from 'react-router-dom'
import styles from "./HomePage.module.css"
import { fetchFilters}  from "../../API/api"

function HomePage(props) {
  const {data} = useOutletContext();
  const {topAlbums ,newAlbums , songs}=data;
  // console.log("data",newAlbums, topAlbums);
  return (
    <>
        <Hero/>
        <div className={styles.wrapper}>
            <Session title="Top Albums" data={topAlbums}  type="album" />
            <Session title="New Albums" data={newAlbums}  type="album" />
            <Session title="songs " data={songs} filterSource={fetchFilters} type="song" />
        </div>
    </>
  )
}

export default HomePage
