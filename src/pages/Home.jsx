import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/ps4-slim.webp'

import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import Clock from '../components/UI/Clock'

import counterImg from '../assets/images/macbook-air-m1.png'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])

  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])

  // const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'computer'
    )

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'console'
    )

    const filteredMobileProducts = products.filter(
      (item) => item.category === 'mobile'
    )

    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'wireless'
    )

    // const filteredPopularProducts = products.filter(
    //   (item) => item.category === 'watch'
    // )

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    // setPopularProducts(filteredPopularProducts)
  }, [])

  const year = new Date().getFullYear()

  return (
    <Helmet title={'Home'}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className='hero__subtitle'>Trending product in {year} </p>
                <h2>Experience an all-new generation of incredible gadgets </h2>
                <p>
                  We are an Australian company that has been in the electronic
                  retail sector for over 15years! We always aim to provide a
                  variety of products at the best possible prices, with shipping
                  and delivery times that are second to none.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Best Sales</h2>
            </Col>

            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className='clock__top-content'>
                <h4 className='text-white fs-6 mb-2'>LImited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>
                  Apple 2020 MacBook Air Laptop 256gb SSD
                </h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className='buy__btn store__btn'
              >
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt='' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new__arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      {/* <section className='popular__category mb-5'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  )
}

export default Home
