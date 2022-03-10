import React, { FC } from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import LanguageSwitch from './LanguageSwitch'
import CartSum from './CartSum'
import styles from './header.module.scss'

const Header:FC = () => {

    return (
        <header className={styles.nav}>
            <Logo></Logo>
            <SearchBar></SearchBar>
            <LanguageSwitch></LanguageSwitch>
            <div className={styles.cart_sum}>
                <CartSum></CartSum>
            </div>
        </header>
    )
}

export default Header