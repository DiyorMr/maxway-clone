import React from 'react'
import './Box.css'
import { cardBox } from './data'
import { NavItem } from 'reactstrap'



export default function Box() {
    return (
        <div className='container' id='boxs'>
            <h1 className='box'>🍟🍔🥤BARAKALI Maxi BOX</h1>
            <div className="boxs-card">
                {
                    cardBox.map((item, index) =>
                        <div className="boxs" key={index}>
                            <img className='box-img' src={item.img} />
                            <h2 className='box-title'>{item.name}</h2>
                            <p className='box-text'>{item.text}</p>
                            <div className="boxs-bottom">
                                <h3 className='boxs-price'>{item.price}</h3>
                                <button className='boxs-btn'>Add</button>
                            </div>
                        </div>

                    )
                }

            </div>

        </div>
    )
}
