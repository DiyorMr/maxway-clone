import React from 'react'
import './Lavash.css'
import img from '../../img/lavash.webp'

export default function Lavash() {
    return (
        <div className='container' id='lavash'>
            <h1 className='lavash'>🌯Lavash</h1>
            <div className="lavash-card ">
                <div className="lavashs">
                    <img className='lavash-img' src={img} alt="" srcset="" />
                    <h2 className='lavash-title'>Lavash standard classic</h2>
                    <p className='lavash-text'>Lavash, beef donard, tomato, chips, tomato sauce, mayonnaise</p>
                    <div className="lavashs-bottom">
                        <h3 className='lavash-price'>30 000 sum</h3>
                        <button className='lavash-btn'>Add</button>
                    </div>

                </div>
                <div className="lavashs">
                    <img className='lavash-img' src={img} alt="" srcset="" />
                    <h2 className='lavash-title'>Lavash standard classic</h2>
                    <p className='lavash-text'>Lavash, beef donard, tomato, chips, tomato sauce, mayonnaise</p>
                    <div className="lavashs-bottom">
                        <h3 className='lavash-price'>30 000 sum</h3>
                        <button className='lavash-btn'>Add</button>
                    </div>
                </div>
                <div className="lavashs">
                    <img className='lavash-img' src={img} alt="" srcset="" />
                    <h2 className='lavash-title'>Lavash standard classic</h2>
                    <p className='lavash-text'>Lavash, beef donard, tomato, chips, tomato sauce, mayonnaise</p>
                    <div className="lavashs-bottom">
                        <h3 className='lavash-price'>30 000 sum</h3>
                        <button className='lavash-btn'>Add</button>
                    </div>

                </div>
                <div className="lavashs">
                    <img className='lavash-img' src={img} alt="" srcset="" />
                    <h2 className='lavash-title'>Lavash standard classic</h2>
                    <p className='lavash-text'>Lavash, beef donard, tomato, chips, tomato sauce, mayonnaise</p>
                    <div className="lavashs-bottom">
                        <h3 className='lavash-price'>30 000 sum</h3>
                        <button className='lavash-btn'>Add</button>
                    </div>
                </div>
                <div className="lavashs">
                    <img className='lavash-img' src={img} alt="" srcset="" />
                    <h2 className='lavash-title'>Lavash standard classic</h2>
                    <p className='lavash-text'>Lavash, beef donard, tomato, chips, tomato sauce, mayonnaise</p>
                    <div className="lavashs-bottom">
                        <h3 className='lavash-price'>30 000 sum</h3>
                        <button className='lavash-btn'>Add</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
