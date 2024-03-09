import React,{useEffect,setTotal, useState} from 'react'

const CartItem = ({handleCartRemoveClick,item,total,setTotal}) => {
   
    const [cartItemQ,setCartItemQ]= useState(1)
    const[price,setPrice]=useState(0)
  
    
    
    function handPrice(){
     let totalAm=0;
     totalAm+=item.price*cartItemQ
     setPrice(totalAm)
    
     
    }
    useEffect(()=>{handPrice()})
  return (
    <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img src={item.images[0]}
                  className="img-fluid rounded-3" alt="Cotton T-shirt"></img>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{item.title}</p>
                <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                onClick={()=>{
                    if(cartItemQ>1)
                    {
                        setCartItemQ(cartItemQ-1)
                    }
                }}
                  >
                  <i className="fas fa-minus"></i>
                </button>
                <button className="btn  px-2">
                {cartItemQ}
                </button>
                      

                <button className="btn btn-link px-2"
                onClick={()=>setCartItemQ(cartItemQ+1)}
                  >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">${price}.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end" onClick={()=>handleCartRemoveClick(item)} >
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" ></i></a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CartItem