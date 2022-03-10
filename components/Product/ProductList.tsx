import React, { FC } from 'react'
import ProductCard from './ProductCard'
import styles from './productList.module.scss'

export interface allProdutos {
    allProdutos: {
        productTitle: string,
        price: number,
        rating: number,
        id: string,
        productImage: {
            url: string
        },
        stock: number
    }[]
}

const ProductList:FC<allProdutos> = ({allProdutos: products}) => {
    return (
    <div className={styles.product_list}> 
        {
            products.map(i => {
                return <ProductCard product={i} key={i.id}/>
            })
        }
    </div>
    )
}

export default ProductList