import React from 'react'

const Button = ({title,onClick}) => {
  return (
    <button onClick={onClick} className='w-[100px] h-[40px] bg-indigo-500 rounded-[9px] text-white'>{title}</button>

  )
}

export default Button