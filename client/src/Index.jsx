import React, { useEffect } from 'react'
import './Index2.css'
const Index = () => {
    useEffect(()=>{
    setTimeout(() => {
            window.location.replace('/auth')
        }, 3000);
    })


  return (
    <div className='lol'>
      <h4>
        <span>IT</span>
        <span>HOUSE</span>
      </h4>
    </div>
  )
}

export default Index
