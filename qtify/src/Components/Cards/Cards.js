import React from 'react'
import { Chip, Tooltip} from "@mui/material"
import styles from './Cards.module.css';
import {Link} from "react-router-dom";

function Cards({data , type}) {
        const getCard = (type) => {
            if (!data) {
                return <div>Loading...</div>; // Handle undefined data case
              }
          


            switch(type){
                case "album" :{
                    const {title ,slug, image,songs, follows} = data;

                    if (!songs || !songs.length) {
                        return <div>No songs available</div>;
                    }



                    return (
                        <Tooltip title={`${songs.length} songs`} placement='top' arrow >
                            <Link to={`/album/${slug}`}>
                                <div className={styles.wrapper}>
                                    <div className={styles.card}>
                                        <img
                                        src={image} alt='Album' loading='lazy'
                                        />
                                        <div className={styles.banner}>
                                            <Chip
                                            label={`${follows} Follows`}
                                            size='small'
                                            className={styles.chip}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.titleWrapper}>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            </Link>
                        </Tooltip>
                      );
                }
                case "song": {
                    const {image ,likes, title} = data;
                    return (
                        <div className={styles.wrapper}>
                                    <div className={styles.card}>
                                        <img
                                        src={image} alt='song' loading='lazy'
                                        />
                                        <div className={styles.banner}>
                                            <div className={styles.pill}>
                                                <p>{likes} Likes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.titleWrapper}>
                                        <p>{title}</p>
                                    </div>
                                </div>                
                    );
                }
                default :
                    return <></>;
            }

        }
        return getCard(type);
  
}

export default Cards
