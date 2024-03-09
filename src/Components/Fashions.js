import React, { useState } from 'react'
import '../Styles/Fashions.css'
import Data1 from '../DATA/Data1'
import Clothes from './LowerComponets/Clothes'
import Shoes from './LowerComponets/Shoes'
import Fashion from './LowerComponets/Fashion'
const Fashions = ({handleCartClick,handleProductDetails}) => {

    const [cat,setCat]= useState(0)
    const [catN,setCatN]= useState(0)
    
    let LoadCom=0;

    const ArrCloth = Data1.filter((item) => item.category.toLowerCase().includes("clothes")).map((item) =>{
        return item
    })
    const ArrShoes = Data1.filter((item) => item.category.toLowerCase().includes("shoes")).map((item) =>{
        return item
    })
    const ArrFashion = ArrCloth.concat(ArrShoes)
    if(cat==1)
    {
        LoadCom= <Clothes catN={catN} handleProductDetails={handleProductDetails} handleCartClick={handleCartClick}  ArrFashion={ArrFashion}/>
    }
    else if(cat==2)
    {
        LoadCom= <Shoes catN={catN} handleProductDetails={handleProductDetails} handleCartClick={handleCartClick}    ArrFashion={ArrFashion}/>
    }
    else{
        LoadCom=<Fashion catN={catN} handleProductDetails={handleProductDetails} handleCartClick={handleCartClick}    ArrFashion={ArrFashion}/>
    }

 
    
    return (
        <div className="d-flex flex-nowrap FashionDiv">

            <div className="d-flex  flex-shrink-0 p-3    FashionDiv1" >
                <ul className="nav nav-pills  mb-auto FashionDiv2">
                    <li>
                        <a href="#" className="nav-link text-white" aria-current="page" onClick={()=>setCat(0)}>
                            All
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white" onClick={()=>setCat(1)}>
                            clothes
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white" onClick={()=>setCat(2)}>
                            shoes
                        </a>
                    </li>
                    <li className="dropdown">

                        <a href="#" className="d-flex align-items-center nav-link text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            shortby
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="#" onClick={()=>setCatN(1)}>
                                price(low to high)
                            </a></li>
                            <li><a className="dropdown-item" href="#" onClick={()=>setCatN(2)}>price(high to low)</a></li>

                            <li></li>
                        </ul>
                    </li>
                </ul>
            </div>
          <div className='MyFashionDiv'>
           
            {LoadCom}
             
         

          </div>


        </div>
    )
}

export default Fashions