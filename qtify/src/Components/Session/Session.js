import React, { useEffect, useState } from 'react'
import styles from './Session.module.css'
import { CircularProgress} from '@mui/material'
import Card from '../Cards/Cards'
import Crousal from '../Crousal/Crousal'
import Filters from '../Filters/Filters'

function Session({title,data=[],type,filterSource}) {
    const [crousalToggle , setcrousalToggle] = useState(true)
    const [filters , setFilter] = useState([{key:"all",label:"All"}])
    const [selectedFilterIndex, setselectedFilterIndex] = useState(0);
    const handelToggle = () =>{
        setcrousalToggle((pre)=> !pre);
    }

    useEffect(()=>{
      if(filterSource){
        filterSource().then((response)=>{
          const {data} = response;
          setFilter([...filters, ...data])
        })
      }
    },[]);


    const ShowFilter = filters.length >1;
    const cardsToRender = data.filter((card) =>
    ShowFilter && selectedFilterIndex !==0 ? card.genre.key ===  filters[selectedFilterIndex].key : card
  );

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={handelToggle} className={styles.toggleText}>
          {!crousalToggle ? "Collapse All" : "Show All"} 
          </h4>
      </div>
      {
        ShowFilter && (
          <div className={styles.filterWrapper}>
            <Filters
                filters = {filters}
                selectedFilterIndex = {selectedFilterIndex}
                setselectedFilterIndex = {setselectedFilterIndex}
            />
          </div>
        )
      }
      {data.length === 0 ? (
        <CircularProgress/>
      ):(
        <div className={styles.Cardwrapper}>
            {!crousalToggle ? (
                <div className={styles.wrapper}>
                    {cardsToRender.map((ele, index) => (
                <Card key={index} data={ele} type={type} />
              ))}

                </div>
            ) : <Crousal 
                    data={cardsToRender}
                    renderComponent={(data)=><Card data={data} type={type} />}
                    /> }
        </div>
      )}
    </div>
  )
}

export default Session
