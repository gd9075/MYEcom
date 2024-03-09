import React from 'react'
import Card from './Card'
import IMMG from '../Images/portrait-young-asian-woman-isolated-blue-studio-space.jpg'
import '../Styles/Home.css'
import Data1 from '../DATA/Data1'

const Home = ({search,setWishlist,wishlist,setCount,handleCartClick,handleProductDetails}) => {
        
    return (
        <div>

            {/* banner */}
            <div className="bnr">
                <h2>Don't be late for the superdeal</h2>
                <p>We'll save you a lot
                    and take every cent you earn</p>
                <button>Shop Now</button>
            </div>
      
            <div className="album py-5 bg-body-tertiary">
                <div className="container OverFLow" >

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            Data1.filter((item)=>item.category.toLowerCase().includes(search)).map((item) => {
                                return (<Card handleProductDetails={handleProductDetails} item={item} setCount={setCount} handleCartClick={handleCartClick} key={item.id} wishlist={wishlist} setWishlist={setWishlist} />)
                            })
                        }
                    </div>
                  
                </div>
            </div>
            {/* card end */}
        </div>
    )
}

export default Home