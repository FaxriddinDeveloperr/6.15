import React from 'react'
import Vidio from '../../assets/IMAGE (1).png'
import Play from '../../assets/IMAGE.svg'

const Hero = () => {
  return (
    <div className='container mt-[40px]'>
        <div className='relative'>
            <img src={Vidio} alt="" />
            <div className='absolute  inset-0 flex items-center justify-center'>
                <button className='p-6  bg-amber-50'>
                    <img src={Play} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero