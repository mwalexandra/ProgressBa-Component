import style from './index.module.css';

  const Legend = ({ item }) => {
    if(item.px > 0){
      return (
        <div className={style.legend}>
          <span 
            className={style.legendColor}
            style={{backgroundColor: item.color}}
          ></span>
          <span>{`${item.name}: ${item.value} (${item.percent}%)`}</span>
        </div>
      )
    } else {
      return undefined;
    }
  };

export default Legend;