import React from 'react'
import './Product.css'
import Card from '../Card'

const Shoes = ({ArrFashion,handleCartClick,catN,handleProductDetails}) => {
   
       
  let loaderShoes =ArrFashion;
  if(catN===1)
  {
  
     const ArrShoes = ArrFashion.sort(function(a,b){return a.price - b.price}).map((item) =>{
      return item
      
  })
  loaderShoes =ArrShoes
  }
  else if(catN===2){
    const ArrS1 = ArrFashion.sort(function(a,b){return b.price - a.price}).map((item) =>{
      return item
     
    })
    loaderShoes =ArrS1

  }
  else{
    loaderShoes =ArrFashion;
  }
  

  return (
    
         <div className='ClothDiv '>
                <div className='Heading_div'><h3>shoes</h3></div> 
                
                
        <div className="container OverFLow Product_div" >

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              loaderShoes.filter((item) => item.category.toLowerCase().includes("shoes")).map((item) => {
                return (<Card item={item} handleProductDetails={handleProductDetails} handleCartClick={handleCartClick} key={item.id} />)
              })
            }
          </div>

        </div>
      </div>
                

            
    
  )
}

export default Shoes