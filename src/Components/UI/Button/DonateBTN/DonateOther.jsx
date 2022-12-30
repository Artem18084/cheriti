import React from 'react'

export default function DonateOther(props) {
  return (
    <button onClick={()=> (props.setOther(!props.other))} className='text-xs font-bold sm:text-sm w-[15%] h-[10vw] sm:h-[7vw] md:h-[4.5vw]  bg-gradient-to-r from-yellow-300  to-blue-600  focus:from-pink-500 focus:to-yellow-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl'>{props.name}</button>

  )
}
