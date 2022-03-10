import React, { FC, useState } from 'react'
import Image from 'next/image'
import styles from './productCard.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import Rating from '@mui/material/Rating';

export interface Product {
    product: {
        productTitle: string,
        price: number,
        rating: number,
        id: string,
        productImage: {
            url: string
        },
        stock: number
    }
    
}

const ProductCard:FC<Product> = ({product}) => {

    const [isAdded, setAdded] = useState(false)

    const handleClick = () => {
        setAdded(!isAdded)
    }

    return (
        <div className={styles.product_card} key={product.id}>
            <Image 
            src={product.productImage.url} 
            alt={product.productTitle} 
            width={640}
            height={640}
            />
            <h1 className={styles.product_font}>{product.productTitle}</h1>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Rating precision={0.25} value={product.rating}></Rating>
                <h5 style={{width: '100%', textAlign: 'left', marginLeft: 5, fontSize: 14}}>{product.rating}</h5>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={styles.product_price}>
                    <h3>${product.price}</h3>
                </div>
                <div style={{width: '35%'}}>
                    <select className={styles.select} name="quantity" id={`quantityfor${product.id}`}>
                        {
                            [...Array(product.stock)].map((i, index) => {
                                if (index != 0) {
                                    return <option value={index} key={`stockoption${index}`}>{index}</option>
                                }
                            })
                        }
                    </select>
                </div>
            </div>
            <button className={styles.button} onClick={handleClick}>
                {isAdded ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div style={{fontSize: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 5px 0px -15px'}}><CheckIcon htmlColor={'#459E31'} fontSize={'inherit'}></CheckIcon></div>Added</div> : 'Add to Cart'}
            </button>
        </div>
    )
}

export default ProductCard