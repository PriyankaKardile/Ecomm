import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
           <h1>Exclusive</h1>
           <h1>Offers for you</h1>
           <p>Only on best sellers product</p>
           <button>Check Now</button>
      </div>
      <div className='offers-image'>
            <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers
