import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Session from '../../Components/Session/Session'
import { useOutletContext } from 'react-router-dom'
function HomePage() {
  const [data] = useOutletContext();
  const [NewAlbums,topAlbums]=data;
  return (
    <>
        <Hero/>
        <Session title="Top Albums" data={[topAlbums]}  type="album" />
        <Session title="New Albums" data={[NewAlbums]}  type="album" />
    </>
  )
}

export default HomePage
