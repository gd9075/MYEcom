import React, { useState } from 'react'


const ProductD = ({ item,handleCartClick }) => {
    const [changeInde, setChangeInde] = useState(0)
    return (
        <div>
            {/* section */}

            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" >
                                    <img style={{ "maxWidth": "100%", "maxHeight": "100vh", "margin": "auto" }} className="rounded-4 fit ProImg" src={item.images[changeInde]} />
                                </a>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                {
                                    item.images && item.images.map((e, index) => {
                                        return (
                                            <div key={index} className="border mx-1 rounded-2 item-thumb" style={{ "cursor": "pointer" }}  >
                                                <img style={{ "width": "60px", "height": "60px", "margin": "10px" }} onClick={() => setChangeInde(index)} className="rounded-2" src={e} ></img>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {item.title}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ms-1">
                                            4.5
                                        </span>
                                    </div>
                                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span className="text-success ms-2">In stock</span>
                                </div>

                                <div className="mb-3">
                                    <span className="h5">${item.price}.00</span>
                                    <span className="text-muted">/per item</span>
                                </div>

                                <p>
                                    {item.description}
                                </p>

                                <div className="row">
                                    <dt className="col-3">Type:</dt>
                                    <dd className="col-9">Regular</dd>

                                    <dt className="col-3">Color</dt>
                                    <dd className="col-9">Brown</dd>

                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton, Jeans</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">Reebook</dd>
                                </div>

                                <hr />

                               
                                <button type="button" className="btn btn-primary" onClick={()=>handleCartClick(item,item.id)}><i className="me-1 fa fa-shopping-basket"></i>Add to cart</button>


                            </div>
                        </main>
                    </div>
                </div>
            </section>
         
        </div>
    )
}

export default ProductD