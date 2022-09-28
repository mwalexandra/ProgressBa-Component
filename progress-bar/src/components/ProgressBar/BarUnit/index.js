import style from './index.module.css'

function BarUnit({ color }){

  return(
    <div 
      className={style.unit}
      style={{backgroundColor: color}}
    ></div>
  )
}
export default BarUnit;