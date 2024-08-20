import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.webp'
import cart from '../../img/cart2.svg'
import modalimg from '../../img/burger.webp'
import user from '../../img/person.svg'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)
  const toggle = () => setModal(!modal)
  const toggle2 = () => setModal2(!modal2)




  return (
    <div className='container'>
      <div className="navbar">
        <img src={logo} />
        <div className="navbar-app">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink></li>
            <li><NavLink to="/branches" className={({ isActive }) => isActive ? "active" : ""}>Branches</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
            <li><NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>Contacts</NavLink></li>
          </ul>

        </div>
        <div className="navbar-info">
          <select className='select' name="cars">
            <option>O'zbekcha</option>
            <option>English</option>
            <option>Русский</option>
          </select>
          <img className='navbar-img' onClick={toggle} src={cart} />
          <p>0 so'm</p>
          <img className='navbar-img' onClick={toggle2} src={user} />
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggle} size='xl' >
        <ModalHeader toggle={toggle}>Cart</ModalHeader>
        <ModalBody>
          <div className="cart">
            <div className="carts-info">
              <div className="cart-left">
                <img className='cart-img' src={modalimg} alt="" />
                <h1 className='cart-name'>Trendvich</h1>
                <div className="carts">
                </div>
                <div className="carts-btn">
                  <button className='cart-btn' onClick={() => setCount(count - 1)}>
                    -
                  </button>
                  <p className='cart-nul' > {count} </p>
                  <button className='cart-btn' onClick={() => setCount(count + 1)}>
                    +
                  </button>
                </div>
                <p className='cart-price'>30 000sum</p>
              </div>
            </div>
            <div className="cart-right">
              <div className="cart-box">
                <div className="carts-left">
                  <h1 className='box-title'>Total</h1>
                  <p className='box-text'>Products</p>
                  <p className='box-text'>Delivery</p>
                  <p className='box-text'>To pay</p>
                </div>
                <div className="carts-right">
                  <p className='box-text'>30 000</p>
                  <p className='box-text'>0 </p>
                </div>
              </div>
              <button className='modal-cart-btn' >Go to checkout</button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal2} toggle={toggle2}  >
        <ModalHeader toggle={toggle2}></ModalHeader>
        <ModalBody>
          <div className="user">
            <h2 className='user-title' >Sign in</h2>
            <p className='user-text'>Sign in with your phone number</p>
            <h4 className='user-phone'>Phone Number</h4>
            <input className='tel' type="tel" placeholder='+9989' />
            <br />
            <button className='user-btn'>Send</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}
