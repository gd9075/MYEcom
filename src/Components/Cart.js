import React, { useState } from 'react'
import CartItem from './LowerComponets/CartItem'
import GooglePayButton from '@google-pay/button-react'
const Cart = ({ addcart, handleCartRemoveClick }) => {
  const [total, setTotal] = useState(0)
  return (
    <div>

      <section className="h-100" >
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>

              </div>


              {
                addcart && addcart.map((item) => {
                  return (
                    <CartItem item={item} total={total} setTotal={setTotal} handleCartRemoveClick={handleCartRemoveClick} key={item.id} />
                  )
                })
              }






              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input type="text" id="form1" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form1">Discound code</label>
                  </div>
                  <button type="button" className="btn btn-outline-warning btn-lg ms-3" onClick={() => { alert("Not Applicable") }}>Apply</button>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <button type="button" className="btn btn-warning btn-block btn-lg" onClick={()=>alert("Your order request denied... sorry for inconvenience")}>Pay On Delivery</button>{""}
                  <br />
                  <hr></hr>

                  <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: 'CARD',
                          parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                          },
                          tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                              gateway: 'example',
                              gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                      },
                      transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '100.00',
                        currencyCode: 'USD',
                        countryCode: 'US',
                      },
                    }}
                    onLoadPaymentData={paymentRequest => {
                      console.log('load payment data', paymentRequest);
                    }}
                  />

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Cart