import React from 'react'
import './Product.css'
import Card from '../Card'

const Clothes = ({ArrFashion,catN,handleCartClick,handleProductDetails}) => {
   
    
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
  
    
  
    
  return (
    
         <div className='ClothDiv '>
                <div className='Heading_div'><h3>Clothes</h3></div> 
                
                
        <div className="container OverFLow Product_div" >

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              loader.filter((item) => item.category.toLowerCase().includes("clothes")).map((item) => {
                return (<Card item={item} handleProductDetails={handleProductDetails} handleCartClick={handleCartClick} key={item.id} />)
              })
            }
          </div>

        </div>
      </div>
                

            
    
  )
}

export default Clothes