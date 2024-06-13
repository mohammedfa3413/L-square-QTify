import React, { useState } from 'react'
import styles from './Session.module.css'
import {Card, CircularProgress} from '@mui/material'
import Crousal from '../Crousal/Crousal'

function Session({title,data,type}) {
    const [crousalToggle , setcrousalToggle] = useState(true)
    const handelToggle = () =>{
        setcrousalToggle((pre)=>
            !pre
        )
    }
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={!handelToggle} className={styles.toggleText}>{crousalToggle ? "Collapse All" : "Show All"} </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress/>
      ):(
        <div className={styles.Cardwrapper}>
            {!crousalToggle ? (
                <div className={styles.wrapper}>
                    {data.map((ele) =>{
                        <Card data={ele} type={type}/>
                    })}
                </div>
            ) : <Crousal data={data}/> }
        </div>
      )}
    </div>
  )
}

export default Session
