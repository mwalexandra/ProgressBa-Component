import BarUnit from './BarUnit';
import style from './index.module.css';

function ProgressBar({ items, height, width }) {

  const total = items.reduce((res, item) => {return res + item.value}, 0);
  
  const valueOfOneUnit = total / 100;
  const pxInOnePerc = width / 100;

  const itemsWithPerc = items.map(item => {
    item.percent = Math.round(item.value / valueOfOneUnit);
    item.px = item.percent * pxInOnePerc;
    return item;
  })
  console.log(itemsWithPerc);
  
  let bars = items && items.length && itemsWithPerc.map((item, i) => {
    const unitsNum = Math.round(item.px / 8); // width of the barUnit is 5 and plus left/right margins are 1.5px
    const units = [];
    for(let i = unitsNum; i > 0; i--){
      units.push(<BarUnit color={item.color} key={i}/>)
    }
    return (
      <div className={style.bar} style={{'height': height}}  key={i}>
        {units}
      </div>
    )
  });

  let values = items && items.length && itemsWithPerc.map((item, i) => {
    if(item.px > 0){
      return (
        <div className="value" style={{'color': item.color, 'width': item.px + 'px'}}  key={i}>
          <span>{item.value}</span>
        </div>
      )
    } else {
      return undefined;
    }
  });

  return (
    <div className={style.progressBar}
      style={{'width': width + 'px'}}
    >
      <div className={style.bars}>
        {bars ? bars : undefined}
      </div>
      <div className={style.values}>
        {values ? values: undefined}
      </div>
      <div className="scale">
      </div>
      <div className="legends">
      </div>
    </div>
  );
}

export default ProgressBar;