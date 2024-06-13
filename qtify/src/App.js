import { useEffect, useState } from 'react';
import './App.css';
// import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { fetchFilters, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './API/api';
import { Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';

function App() {
  const [data ,setData] = useState({})
  const generateData = (key,source)=>{
    source.then((data)=>{
      setData((pre)=>{
        return {...pre , [key]: data}
      });
    });
  }

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("NewAlbums", fetchNewAlbums);
    // generateData("songs", fetchSongs);
    // generateData("filter", fetchFilters);
  },[])

  const [topAlbums=[], NewAlbums=[], songs=[],filter=[]] =data;


  return (
    <>
    <StyledEngineProvider>
    <Navbar/>
    {/* <Hero/> */}
    <Outlet context={{data:{topAlbums, NewAlbums}}}/>
    </StyledEngineProvider>
    
    
    </>
  );
}

export default App;
