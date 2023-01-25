import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import './Right.css'

const Right = () => {
  return (
    <div className='RightSide'>
        <div>
            <h3>Updates</h3>
            <Updates />
        </div>
        <div className="">
            <h3>Cusromer Review</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default Right