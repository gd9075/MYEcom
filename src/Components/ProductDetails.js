import React from 'react'
import ProductD from './LowerComponets/ProductD'
const ProductDetails = ({ pdetails,handleCartClick }) => {
  return (
    <div>

      {
        pdetails && pdetails.map((item) => {
          return (<ProductD key={item.id} item={item} handleCartClick={handleCartClick}  />)
        })
      }
     
    </div>
  )
}

export default ProductDetails