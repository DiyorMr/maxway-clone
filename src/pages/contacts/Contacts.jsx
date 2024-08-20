import React from 'react'
import './Contacts.css'
import code from '../../img/qrcod.png'
import tme from '../../img/tme.png'


const Contacts = () => {
  return (
    <div className='container'>
      <h1 className='contacts-title'>Contacts</h1>
      <div className="contacts-card">
        <img className='contacts-img' src={code} alt="" />
        <p className='contacts-text'>Leave a review or
          ask a question in Telegram</p>
        <a className='tme' href='#'>t.me/maxwaymasterfood_bot</a>
      </div>
      <h2 className='call'>Single call center</h2>
      <a href=''>+998712005400</a>


    </div>
  )
}

export default Contacts