import React from 'react'
import '../Styles/Accessories.css'
const Accessories = () => {
  return (
    <div>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
        <img className="bd-placeholder-img AccImg"  src='https://t4.ftcdn.net/jpg/05/12/31/31/360_F_512313150_SXjoxQrERJnZZeMzLQPjEYCQS67qdJFs.jpg' alt=""></img>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active">
      <img className="bd-placeholder-img AccImg"  src='https://www.shutterstock.com/image-photo/wireless-headphones-phone-on-yellow-260nw-1691180977.jpg' alt=""></img>

        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img className="bd-placeholder-img AccImg"  src='https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309682.jpg' alt=""></img>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>




  <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">New Offers</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{"background-image": "url(https://cdn.dribbble.com/users/3713179/screenshots/9536384/media/ed9f05d7ed5b92878712ced805e97a54.png?resize=400x0)"}} >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{"background-image": "url(https://mir-s3-cdn-cf.behance.net/projects/404/7d36f3102495333.Y3JvcCwzODA4LDI5NzgsMCww.jpg)"}} >           
        
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{"background-image": "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/282373794/original/73bcf147766183d095a85bf9b6affdd90557b3e8/gadget-social-media-banner.jpg)"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
              </li>
              <li className="d-flex align-items-center me-3">
                <small></small>
              </li>
              <li className="d-flex align-items-center">
                <small></small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{"background-image": "url(https://mir-s3-cdn-cf.behance.net/projects/404/4dacaf160349327.Y3JvcCwxMzk4LDEwOTQsMCww.jpg)"}} >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{"background-image": "url(https://cdn.dribbble.com/users/10268374/screenshots/17915471/media/b8b3f417debfd572f9ece1ffb29ffaea.jpg?resize=400x300&vertical=center)"}} >           
        
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{"background-image": "url(https://cdn.dribbble.com/userupload/3582899/file/original-6781755995f0bd1e5fd955424c02358f.jpg?resize=400x300&vertical=center)"}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
              </li>
              <li className="d-flex align-items-center me-3">
                <small></small>
              </li>
              <li className="d-flex align-items-center">
                <small></small>
              </li>
            </ul>
          </div>
        </div>
      </div>



    </div>
  </div>





    </div>
  )
}

export default Accessories