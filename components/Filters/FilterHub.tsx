import React, {FC} from 'react'
import styles from './filterHub.module.scss'

const FilterHub:FC = () => {
  return (
    <div className={styles.filter_hub}>
      <div>
        <input type="text" placeholder='Max' className={styles.filter}/>
        <input type="text" placeholder='Min' className={styles.filter}/>
        <div style={{position: 'relative'}}>
          <label htmlFor="rating" className={styles.label}>Rating</label>
          <select name="rating" id="" className={`${styles.filter} ${styles.select} ${styles.rating}`}>
            <option value="1">1 and above</option>
            <option value="2">2 and above</option>
            <option value="3">3 and above</option>
            <option value="4">4 and above</option>
            <option value="5">5 stars</option>
          </select>
        </div>
      </div>
      <div>
        <div style={{position: 'relative'}}>
          <label htmlFor="sortby" className={styles.label}>Sort By</label>
          <select name="sortby" id="" className={`${styles.filter} ${styles.select}`}>
              <option value="rating">Rating</option>
              <option value="price_asc">Highest Price</option>
              <option value="price_desc">Lowest Price</option>
          </select>
        </div>
      </div>
    </div>
  )
}
export default FilterHub