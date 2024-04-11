import React from 'react'
import './DescriptionBox.css'

const DesriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p> An e-commerce website is an online platform that facilitate the 
          buying and selling of product or services over the internet it
          serves as a virtual marketplace where business and indivisuals can 
          showcase their products, interact with customers and contact
          transactions without the need for a physical prosence.
          E-commerce website have gained immense popularity due to their convenience,accessibility,and the global reach they offer.</p>
          <p>E-commerce websites typically display product or services along with detailed decription,images,prices,and any available variations(e.g.sizes,color).Each product usally has its own dedicated page with relevant information.</p>
      </div>
    </div>
  )
}

export default DesriptionBox
