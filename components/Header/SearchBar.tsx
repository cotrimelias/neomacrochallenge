import React, {FC} from 'react'
import styles from './searchBar.module.scss'
const SearchBar:FC = () => {
  return (
    <input className={styles.search_bar} type="text" placeholder='search millions of products' />
  )
}

export default SearchBar