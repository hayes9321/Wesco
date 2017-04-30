const actions = {
  addItem: function(itemInfo,itemSelected){
    return{
      type: 'ADD_ITEM',
      payload: itemInfo, itemSelected
    }
  },
  removeItem: function(id, priceTotal, gmcPriceTotal){
    return{
      type:'REMOVE_ITEM',
      payload: id, priceTotal, gmcPriceTotal
    }
  }
}
export default actions