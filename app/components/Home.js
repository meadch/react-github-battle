import React from 'react'
import { Link } from 'react-router'
import Jumbotron from './JumbotronWrapper'

const Home = () => (
  <Jumbotron>
    <h1>Github Battle</h1>
    <p className='lead'>War of Stars & Followers</p>
    <Link to='/playerOne'>
      <button type='button' className='btn btn-lg btn-success'>Get Started</button>
    </Link>
  </Jumbotron>
)

export default Home
