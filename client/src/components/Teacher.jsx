import React, { useEffect } from 'react'
import '../Index2.css'
const Teacher = () => {
    useEffect(()=>{
    setTimeout(() => {
            window.location.replace('/teacher')
        }, 3000);
    })


  return (
    <div className='lol'>
      <h4>
        <span>WELCOME</span>
        <span className='z'>Teacher</span>
      </h4>
    </div>
  )
}

export default Teacher

