

export default function Dots(props) {
    
  return (
    <button onClick={props.click} className={`${props.selfClass} w-6 h-6  max-[1024px]:w-4 max-[1024px]:h-4 max-[768px]:w-3 max-[768px]:h-3 `} >
    <img  src={props.src} alt={props.alt}></img>
  </button>
  )
}
