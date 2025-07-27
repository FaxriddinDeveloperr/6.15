import React, { useState } from 'react'
import Logo from "../../assets/DWEL®.svg"
import Button from '../../ui/Button'
import Popup from '../../ui/popup'

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleShowSignIn = () => setShowSignIn(true)
  const handleCloseSignIn = () => setShowSignIn(false)

  const handleShowSignUp = () => setShowSignUp(true)
  const handleCloseSignUp = () => setShowSignUp(false)

  return (
    <header className='mt-[40px]'>
      <div className='container flex items-center justify-between w-full h-[25px]'>
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className='flex gap-[18px]'>
          <Button onClick={handleShowSignIn} title={"Sign In"} />
          <Button onClick={handleShowSignUp} title={"Sign Up"} />
        </div>

        {showSignIn && (
          <Popup>
            <div className='size-80 bg-white p-4 rounded shadow'>
              <h3 className='text-xl font-bold mb-2'>Sign In</h3>
              <input type="text" placeholder="Username" className='border p-2 w-full mb-4' />
              <Button onClick={handleCloseSignIn} title={'Cancel'} />
            </div>
          </Popup>
        )}

        {showSignUp && (
          <Popup>
            <div className='size-80 bg-white p-4 rounded shadow'>
              <h3 className='text-xl font-bold mb-2'>Sign Up</h3>
              <input type="text" placeholder="Email" className='border p-2 w-full mb-4' />
              <Button onClick={handleCloseSignUp} title={'Cancel'} />
            </div>
          </Popup>
        )}
      </div>
    </header>
  )
}

export default Header
