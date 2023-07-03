import React, { useEffect } from 'react'
import '../Index2.css'
const Student = () => {
    useEffect(()=>{
    setTimeout(() => {
            window.location.replace('/students')
        }, 3000);
    })


  return (
    <div className='lol'>
      <h4>
        <span>WELCOME</span>
        <span className='z'>Student</span>
      </h4>
    </div>
  )
}

export default Student

