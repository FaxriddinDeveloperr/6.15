import React from 'react'
import Logo from "../../assets/DWEL®.svg"
import Button from '../../ui/Button'

const Header = () => {
  return (

      <header className='mt-[40px]'>
        <nav className='container flex items-center justify-between'>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className='flex gap-[18px]'>
            <Button title={"Sign In"}></Button>
            <Button title={"Sign Up"}></Button>
          </div>

        </nav>

        
      </header>
      
  )
}

export default Header