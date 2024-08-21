import React, { useState } from 'react'
import styles from './Card.module.css'
import ModalContent from '../modal/Modal'

function Card({ item }) {
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState([])
    return (
        <>
            <div className={styles.boxs} onClick={() => { setModal(true); setModalData(item) }}>
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

            <ModalContent modal={modal} setModal={setModal} modalData={modalData} />
        </>
    )
}

export default Card