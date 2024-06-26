import React from 'react'
import styles from "./SearchBar.module.css"
import {ReactComponent as SearchIcon} from '../../assets/Search icon.svg'
function SearchBar({keyword}) {
    const handelsubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <form className={styles.wrapperr}>
        <input className={styles.search} placeholder={keyword} onSubmit={handelsubmit} required/>
        <button className={styles.searchButton} type='Submit'>
            <SearchIcon/>
        </button>
    </form>
  )
}

export default SearchBar
