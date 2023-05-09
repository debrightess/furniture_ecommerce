import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

import '../styles/checkout.css'

const Popup = (props) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  )
}

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />

      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Enter your name' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='email' placeholder='Enter your email' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='number' placeholder='Phone number' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Street address' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='City' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Postal code' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Country' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className='checkout__cart'>
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <br />
                  free shipping<span>0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <div>
                  <input type='button' value='Checkout' onClick={togglePopup} />

                  {isOpen && (
                    <Popup
                      content={
                        <div>
                          <h2>Payment Details</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </p>
                          <button>Click to confirm payment with seller</button>
                        </div>
                      }
                      handleClose={togglePopup}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout
