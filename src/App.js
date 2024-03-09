import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart';
import AllCategories from './Components/AllCategories'
import Home from './Components/Home'
import NewArrivels from './Components/NewArrivels';
import Fashions from './Components/Fashions';
import Accessories from './Components/Accessories';
import { click } from '@testing-library/user-event/dist/click';
import Data1 from './DATA/Data1';
import ProductDetails from './Components/ProductDetails';
import { Auth0Provider } from '@auth0/auth0-react';






const App = () => {
  const [search,setSearch]= useState("");
  const [count,setCount] =useState(0)
  const [wishlist,setWishlist] =useState(0)
  const [addcart,setAddcart] =useState([])
  const [totalamount,setTotalamount]=useState(0)
  const [pdetails,setPdetails] =useState([])

  
   let pro=1;
   let b=true;
   let AREE=[]
   function handleProductDetails(id,item)
   {
    
    
    setPdetails([...pdetails.filter(item1 =>item1.id===id),item])
    
    
    setCount(6)
        
   }
   
   
  function handleCartClick(item,id){
      let AR= addcart.filter((item1) =>{
        if(item1.id===id)
        {
          b=false
        }
        return item1.id

      })
      if(b){
        setWishlist(wishlist+1)
      }
    setAddcart([...addcart.filter(item1 =>item1.id!==id), {...item,Pro:pro} ])
    
      b=true
  }

  function handleCartRemoveClick(item){
    setWishlist(wishlist-1)
       const Arr=addcart.filter(item1 =>item1.id!==item.id)
       setAddcart(Arr)
}
  
  
 

  let ComponentPage =0;
  if(count===1){
     ComponentPage= <AllCategories wishlist={wishlist} setSearch={setSearch} handleCartClick={handleCartClick}  handleProductDetails={handleProductDetails} search={search} setWishlist={setWishlist}/>
    
  }
  else if(count===2)
  {
    ComponentPage=<NewArrivels />
  }
  else if(count===3)
  {
    ComponentPage=<Fashions handleProductDetails={handleProductDetails}  handleCartClick={handleCartClick}/>
  }
  else if(count===4)
  {
    ComponentPage=<Accessories/> 
  }
  else if(count===5)
  {
    ComponentPage=<Cart  addcart={addcart} handleCartRemoveClick={handleCartRemoveClick}  search={search}/>

  }
  else if(count===6)
  {
    ComponentPage=<ProductDetails pdetails={pdetails} handleCartClick={handleCartClick} />

  }
  
  else{
       ComponentPage= <Home handleProductDetails={handleProductDetails} search={search} setCount={setCount} wishlist={wishlist} handleCartClick={handleCartClick} setWishlist={setWishlist}/>

  }
  
  return (
    <div>
      <NavBar add_cart={addcart} setSearch={setSearch} wishlist={wishlist} setCount={setCount}/>
      {ComponentPage}
      <Footer/>
    </div>
  )
}

export default App