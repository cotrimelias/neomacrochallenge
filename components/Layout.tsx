import React, { FC } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Home.module.css'
const ProductCard:FC = ({children}) => {

    return (
        <main className={styles.main}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </main>
    )
}

export default ProductCard