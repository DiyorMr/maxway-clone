import React from 'react'
import './Branches.css'
import { dataInfo } from './data'

const Branches = () => {
  return (
    <div className='container'>
      <div className='branches-logo'>
        <div className="logo-left">
          <h1 className='logo-title'>Branches</h1>
        </div>
        <div className="logo-right">
          <button className='logo-btn'>List</button>
          <button className='logo-btn2'>Map</button>
        </div>
      </div>
      <div className="branches-card">
        {
          dataInfo.map((item, index) =>
            <div className="card-adress" key={index}>
              <div className="card-left">
                <h3 className='adress-title'>{item.name}</h3>
                <p className='adress-text'>{item.adress.street},{item.adress.home_number}</p>
                <p className='card-time'><span className='adress-info'>Schedule:</span><br />{item.open}</p>
              </div>
              <div className="card-right">
                <p className='card-watch'>{item.week}</p>
                <p className='card-number'><span className='card-phone'>Phone:</span><br />{item.number}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Branches