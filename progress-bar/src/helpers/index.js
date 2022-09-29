export const divideBy100 = (number) => number / 100;

export const setNewItems = (items, num1, num2) => {
  items.map(item => {
    item.percent = Math.round(item.value / num1);
    item.px = item.percent * num2;
    return item;
  })
  return items;
}