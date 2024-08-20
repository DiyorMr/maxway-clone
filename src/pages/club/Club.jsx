import React from 'react'
import './Club.css'
import img from '../../img/klab.webp'


export default function Club() {
    return (
        <div className='container' id='club'>
            <h1 className='club'>🥪Club - Sandvich 📣</h1>
            <div className="clubs-card">
                <div className="clubs">
                    <img className='club-img' src={img} alt="" srcset="" />
                    <h2 className='club-title'>Club Sandwich Chicken</h2>
                    <p className='club-text'>Original sandwich, fries, sauce to choose from</p>
                    <div className="clubs-bottom">
                        <h3 className='club-price'>38 000 sum</h3>
                        <button className='club-btn'>Add</button>
                    </div>

                </div>
                <div className="clubs">
                    <img className='club-img' src={img} alt="" srcset="" />
                    <h2 className='club-title'>Sandwich Original</h2>
                    <p className='club-text'>Toaster bread, chicken schnitzel, fresh cucumbers,
                        tomatoes, club sauce, Hohland cheese</p>
                    <div className="clubs-bottom">
                        <h3 className='club-price'>30 000 sum</h3>
                        <button className='club-btn'>Add</button>
                    </div>

                </div><div className="clubs">
                    <img className='club-img' src={img} alt="" srcset="" />
                    <h2 className='club-title'>Trendvich</h2>
                    <p className='club-text'>Trendwich Toaster bun, mayonnaise, iceberg lettuce leaf,
                        1 piece tomato and chicken schnitzel</p>
                    <div className="clubs-bottom">
                        <h3 className='club-price'>30 000 sum</h3>
                        <button className='club-btn'>Add</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
