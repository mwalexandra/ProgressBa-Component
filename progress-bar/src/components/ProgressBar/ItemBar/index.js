import BarUnit from './BarUnit';
import style from './index.module.css';

const ItemBar = ({ item, height }) => {

    const unitsNum = Math.round(item.px / 8), // width of the barUnit is 5 and plus left/right margins are 1.5px
          units = [];

    for(let i = unitsNum; i > 0; i--){
      units.push( <BarUnit color={item.color} key={i}/> );
    }

    return (
      <div className={style.bar} style={{'height': height}}>
        {units}
      </div>
    )
}

export default ItemBar;