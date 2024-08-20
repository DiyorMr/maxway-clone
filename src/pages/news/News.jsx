import React, { useState } from 'react'
import './News.css'
import img from '../../img/trandvich.webp'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { cardNews } from './data'

export default function News() {

    const [cardInfo, setCardInfo] = useState(null)
    const [count, setCount] = useState(0)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);

    const cardInfoFunc = (item) => {
        setCardInfo(item)
        setModal(true)
    }
    return (
        <div className='container'>
            <h1 className='news'>Yangilik 📣</h1>
            <div className="news-card">
                {
                    cardNews.map((item, index) =>
                        <div className="cards" key={index}>
                            <img className='card-img' src={item.img} />
                            <h2 className='card-title' onClick={toggle} >{item.name}</h2>
                            <p className='card-text'  >{item.text}</p>
                            <div className="cards-bottom">
                                <h3 className='card-price'>{item.price}</h3>
                                <button className='card-btn'>Add</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Modal size='lg' isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className="modal-info">
                        <div className="modal-left">
                            <img className='modal-img' src={img} />
                        </div>
                        <div className="modal-right">
                            <div className="modal-top">
                                <h1 className='modal-title'>Trendvich</h1>
                                <p className='modal-text'>Trendwich Toaster bun, mayonnaise, iceberg lettuce leaf,
                                    1 piece tomato and chicken schnitzel</p>
                            </div>
                            <div className="modal-bottom">
                                <div className="info-btn">
                                    <button className='info-cart-btn' onClick={() => setCount(count - 1)}>
                                        -
                                    </button>
                                    <p className='info-cart-nul' > {count} </p>
                                    <button className='cart-btn' onClick={() => setCount(count + 1)}>
                                        +
                                    </button>
                                </div>
                                <div className="modal-price">
                                    <button className='modal-price-info'>30 000 sum</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
