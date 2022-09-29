import ItemBar from './ItemBar';
import Legend from './Legend';
import style from './index.module.css';
import { divideBy100, setNewItems } from '../../helpers'

function ProgressBar({ data }) {

  const { items, barHeightInPx: height, barWidthInPx: width } = data;

  const total = items.reduce((res, item) => {return res + item.value}, 0),
        valueOfOneUnit = divideBy100(total),
        pxInOnePerc = divideBy100(width),
        itemsWithPerc = setNewItems(items, valueOfOneUnit, pxInOnePerc);
  
  // bars for every item
  const itemBars = itemsWithPerc.map((item, i) => {
    return <ItemBar 
              item={item}
              height={height}
              key={i} 
            />
  });

  // legend for every item
  const legends = itemsWithPerc.map((item, i) => {
    return <Legend
              item={item}
              key={i} 
            />
  });

  return (
    <div 
      className={style.progressBar}
      style={{'width': width + 'px'}}
    >
      <div className={style.bars}>
        {itemBars}
      </div>
      <div className={style.legend}>
        {legends}
      </div>
    </div>
  );
}

export default ProgressBar;