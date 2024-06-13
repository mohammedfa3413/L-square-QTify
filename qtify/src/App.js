import { useEffect, useState } from 'react';
import'./App.css';
import Navbar from './Components/Navbar/Navbar';
import {  fetchNewAlbums,  fetchTopAlbums } from './API/api';
import { Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';

function App() {
  const [data ,setData] = useState({})
  const generateData = (key,source)=>{
    source().then((data)=>{
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

  const {topAlbums=[], NewAlbums=[]} =data;


  return (
    <>
    
    <StyledEngineProvider>
    <Navbar/>
    <Outlet context={{data:{topAlbums, NewAlbums}}}/>
   
    </StyledEngineProvider>
    
    
    </>
  );
}

export default App;












