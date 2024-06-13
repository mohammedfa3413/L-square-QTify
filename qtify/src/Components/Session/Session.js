import React, { useState } from 'react'
import styles from './Session.module.css'
import { CircularProgress} from '@mui/material'
import Card from '../Cards/Cards'
import Crousal from '../Crousal/Crousal'

function Session({title,data = [],type}) {
    const [crousalToggle , setcrousalToggle] = useState(true)
    const handelToggle = () =>{
        setcrousalToggle((pre)=> !pre);
    }
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 onClick={handelToggle} className={styles.toggleText}>{crousalToggle ? "Collapse All" : "Show All"} </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress/>
      ):(
        <div className={styles.Cardwrapper}>
            {!crousalToggle ? (
                <div className={styles.wrapper}>
                    {data.map((ele, index) => (
                <Card key={index} data={ele} type={type} />
              ))}

                </div>
            ) : <Crousal 
                    data={data}
                    renderComponent={(data)=><Card data={data} type={type} />}
                    /> }
        </div>
      )}
    </div>
  )
}

export default Session
