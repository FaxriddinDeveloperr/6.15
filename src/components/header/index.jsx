import React, { useState } from 'react'
import Logo from "../../assets/DWEL®.svg"
import Button from '../../ui/Button'
import Popup from '../../ui/popup'

const Header = () => {

  const [show,setShow] = useState(false)
  const handleShow = ()=> setShow(true)
  const handleClose = ()=> setShow(false)
  return (

      <header className='mt-[40px]'>
        <div className='container flex items-center justify-between w-full h-[25px]'>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className='flex gap-[18px]'>
            <Button onClick={handleShow} title={"Sign In"} ></Button>
            <Button title={"Sign Up"}></Button>
          </div>

          { show &&
          <Popup>
            <div className='size-80 bg-white'> 
              <h3>sxwdefrgthyj</h3>
              <Button onClick={handleClose} title={'Cancel'}></Button>
            </div>
          </Popup>
          }

  
        </div>




        
      </header>
      
  )
}

export default Header