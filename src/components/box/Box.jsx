import React from 'react'
import styles from './Box.module.css'
import Card from '../../components/card/Card'

export default function Box({item}) {
    return (
        <div className='container' id={item.id}>
            <h1 className={styles.box}>{item.title}</h1>
            <div className={styles.boxsCard}>
                {item.card_data.map((item, index) => <Card item={item} key={index} />)}
            </div>
        </div>
    )
}
