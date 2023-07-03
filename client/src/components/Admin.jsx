import React, { useEffect } from 'react'
import '../Index2.css'
const Admin = () => {
    useEffect(()=>{
    setTimeout(() => {
            window.location.replace('/admin')
        }, 3000);
    })


  return (
    <div className='lol'>
      <h4>
        <span>WELCOME</span>
        <span className='z'>Admin</span>
      </h4>
    </div>
  )
}

export default Admin

