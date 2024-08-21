import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import styles from './Modal.module.css'


const ModalContent = ({ modal, setModal, modalData }) => {
    const [count, setCount] = useState(0)

    const toggle = () => setModal(!modal);
    return (
        <Modal size='lg' isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{modalData.name}</ModalHeader>
            <ModalBody>
                <div className={styles.modalInfo}>
                    <div className="modal-left">
                        <img className={styles.modalImg} src={modalData.img} />
                    </div>
                    <div className="modal-right">
                        <div className="modal-top">
                            <p className='modal-text'>{modalData.text}</p>
                        </div>
                        <div className={styles.modalBottom}>
                            <div className={styles.infoBtn}>
                                <button className={styles.infoCartBtn} onClick={() => setCount(count - 1)}>
                                    -
                                </button>
                                <p className={styles.infoCartNul} > {count} </p>
                                <button className='cart-btn' onClick={() => setCount(count + 1)}>
                                    +
                                </button>
                            </div>
                            <div className="modal-price">
                                <button className={styles.modalPriceInfo}>{modalData.price}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ModalContent