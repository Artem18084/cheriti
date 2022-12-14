import React from 'react'

export default function ReportItem(props) {
    
  return (
   
    <img onDoubleClick={()=>props.setWidth(false)} onClick={()=> props.setWidth(true)} className={`  `} src={props.src} alt = {props.alt}/>
  )
}
