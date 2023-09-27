import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show,setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    })
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://img01.products.bt.co.uk/content/dam/bt/portal/images/logos/tv/Netflix_Logo_Final.png" alt="" />
    </div>
  )
}

export default Nav