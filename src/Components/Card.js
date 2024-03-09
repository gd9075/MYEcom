import React from 'react'
import '../Styles/Card.css'
const Card = ({ item, setWishlist,setCount, wishlist,handleCartClick,handleProductDetails }) => {

  function handleWishlist() {


  }
  return (




    <div className="col-lg-3 col-md-6 col-sm-6" >
      <div className="card px-4 border shadow-0 mb-4 mb-lg-0">

        <div className="mask px-2" >
          <div className="d-flex justify-content-between">
            <h6><span className="badge bg-danger pt-1 mt-3 ms-2"></span></h6>
            <a href="#"></a>
          </div>
        </div>

        <a href="#" className="">
          <img src={item.images[0]} className="card-img-top rounded-2"></img>
        </a>
        <div className="card-body d-flex flex-column pt-3 border-top">
          <a href="#" className="nav-link">{item.title}</a>
          <div className="price-wrap mb-2">
            <strong className="">${item.price}</strong>{" "}
            <del className="">${item.price + 200}</del>{" "}

          </div>
          <div className="price-wrap mb-2">
          <button type="button" className="btn btn-primary"onClick={()=>handleProductDetails(item.id,item)}>Product Details</button>
          </div>
          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
            <a href="#" className="btn btn-outline-primary w-100" onClick={()=>handleCartClick(item,item.id)}>Add to cart <i className="fa fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Card