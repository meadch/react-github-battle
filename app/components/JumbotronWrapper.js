import React from 'react'
import {transparentBg} from '../styles'

const Jumbotron = (props) => (
  <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
    {props.children}
  </div>
)

export default Jumbotron
