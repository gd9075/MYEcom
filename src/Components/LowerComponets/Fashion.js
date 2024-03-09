import React from 'react'
import './Product.css'
import Card from '../Card'

const Fashion = ({ArrFashion,catN,handleCartClick,handleProductDetails}) => {
   
       Math.floor(Math.random)
    let loader =ArrFashion;
    if(catN==1)
    {
    
       const Arr = ArrFashion.sort(function(a,b){return a.price - b.price}).map((item) =>{
        return item
       
    })
    loader =Arr
    }
    else if(catN==2){
      const Arr1 = ArrFashion.sort(function(a,b){return b.price - a.price}).map((item) =>{
        return item
        
      })
      loader =Arr1

    }
    else{
       loader =ArrFashion;
    }
  return (
    
         <div className='ClothDiv '>
                <div className='Heading_div'><h3>All in Fashions</h3></div> 
                
                
        <div className="container OverFLow Product_div" >

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              loader.map((item) => {
                return (<Card item={item} handleProductDetails={handleProductDetails} handleCartClick={handleCartClick} key={item.id} />)
              })
            }
          </div>

        </div>
      </div>
                

            
    
  )
}

export default Fashion