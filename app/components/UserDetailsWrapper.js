import React from 'react'

const UserDetailsWrapper = (props) => (
  <div className='col-sm-6'>
    <p className='lead'>{props.header}</p>
    {props.children}
  </div>
)

export default UserDetailsWrapper
