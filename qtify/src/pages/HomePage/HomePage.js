import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Session from '../../Components/Session/Session'
import { useOutletContext } from 'react-router-dom'

function HomePage() {
  const {data} = useOutletContext();
  const {newAlbums,topAlbums}=data;
  // console.log("data",newAlbums, topAlbums);
  return (
    <>
        <Hero/>
        <Session title="Top Albums" data={topAlbums}  type="album" />
        <Session title="New Albums" data={newAlbums}  type="album" />
    </>
  )
}

export default HomePage
