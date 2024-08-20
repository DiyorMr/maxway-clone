import React from 'react'
import './Box.css'
import { cardBox } from './data'
import styles from './Box.module.css'



export default function Box() {
    return (
        <div className='container' id='boxs'>
            <h1 className={styles.box}>🍟🍔🥤BARAKALI Maxi BOX</h1>
            <div className={styles.boxsCard}>
                {
                    cardBox.map((item, index) =>
                        <div className={styles.boxs} key={index}>
                            <img className={styles.boxImg} src={item.img} />
                            <div className={styles.cardInfo}>
                                <h2 className={styles.boxTitle}>{item.name}</h2>
                                <p className={styles.boxText}>{item.text}</p>
                                <div className={styles.boxsBottom}>
                                    <h3 className={styles.boxsPrice}>{item.price}</h3>
                                    <button className={styles.boxsBtn}>Add</button>
                                </div>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    )
}
