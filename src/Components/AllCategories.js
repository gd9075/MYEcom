import React, { useState } from 'react'
import '../Styles/AllCategories.css'
import Data1 from '../DATA/Data1'
import Card from './Card'
const AllCategories = ({wishlist,setWishlist,search,setSearch,handleCartClick,handleProductDetails}) => {
  

  return (
    <div>

      <div className="container-fluid  main-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="top-banner">
                <div className="row">
                  <div className="col-md-7">
                    <h2>SAVE 30%</h2>
                    <h3>Hoodie"S Combo</h3>
                    <p>Web design refers to the design refers</p>
                  </div>
                  <div className="col-md-5">
                    <div>
                      <img src="https://i.imgur.com/FDwQgLy.jpeg" alt=''></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="top-banner">
                <div className="row">
                  <div className="col-md-7">
                    <h2>SAVE 30%</h2>
                    <h3>Classic Joggers</h3>
                    <p>Web design refers to the design refers</p>
                  </div>
                  <div className="col-md-5">
                    <div>
                      <img src="https://i.imgur.com/633Fqrz.jpeg"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="top-banner">
                <div className="row">
                  <div className="col-md-7">
                    <h2>SAVE 30%</h2>
                    <h3>Baseball Cap</h3>
                    <p>Web design refers to the design refers</p>
                  </div>
                  <div className="col-md-5">
                    <div>
                      <img src="https://i.imgur.com/BZrIEmb.jpeg"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="top-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <h2>SAVE 30%</h2>
                    <h3>We Make The Best deal on chinos</h3>
                    <p>Lorem Ipsum is simply dummy text  how to make ecommerce website industry. Web design refers to the design refers</p>
                  </div>
                  <div className="col-lg-5">
                    <div>
                      <img src="https://i.imgur.com/NLn4e7S.jpeg"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="top-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <h2>SAVE 30%</h2>
                    <h3>Classic White Tee - Timeless Style and Comfort</h3>
                    <p>Lorem Ipsum is simply of how to build an ecommerce website from scratch. Web design refers to the design refers</p>
                  </div>
                  <div className="col-lg-5">
                    <div>
                      <img src="https://i.imgur.com/SZPDSgy.jpeg"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>









      <div className="container-fluid main-section bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("smartphones")}>
                <img src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"></img>
                <h2>smartphones</h2>
                <p>All Products</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("laptops")} >
                <img src="https://cdn.dummyjson.com/product-images/6/thumbnail.png"></img>
                <h2>laptops</h2>
                <p>All Products</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("fragrances")}>
                <img src="https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"></img>
                <h2>fragrances</h2>
                <p>All Products</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("skincare")}>
                <img src="https://cdn.dummyjson.com/product-images/16/1.png"></img>
                <h2>skincare</h2>
                <p>All Products</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("groceries")}>
                <img src="https://cdn.dummyjson.com/product-images/21/1.png"></img>
                <h2>groceries</h2>
                <p>All Products</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("home-decoration")}>
                <img src="https://cdn.dummyjson.com/product-images/26/1.jpg"></img>
                <h2>home-decoration</h2>
                <p>All Products</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("clothes")}>
                <img src="https://i.imgur.com/9DqEOV5.jpeg"></img>
                <h2>Clothes</h2>
                <p>All Products</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="category-list" onClick={()=>setSearch("electronics")}>
                <img src="https://i.imgur.com/LGk9Jn2.jpeg"></img>
                <h2>Electronics</h2>
                <p>all Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="album py-5 bg-body-tertiary">
        <div className="container OverFLow" >

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              Data1.filter((item) => item.category.toLowerCase().includes(search)).map((item) => {
                return (<Card handleProductDetails={handleProductDetails} item={item} key={item.id} wishlist={wishlist} handleCartClick={handleCartClick} setWishlist={setWishlist} />)
              })
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default AllCategories