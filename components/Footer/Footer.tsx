import React, { FC } from 'react'
import CartSum from '../Header/CartSum'
import Pagination from './Pagination'
import styles from './footer.module.scss'

const Footer:FC = () => {

    return (
        <footer className={styles.footer}>
            <Pagination></Pagination>
            <div className={styles.cart_sum}>
                <CartSum></CartSum>
            </div>
        </footer>
    )
}

export default Footer