const actions = {
  addItem: function(itemInfo,itemSelected){
    return{
      type: 'ADD_ITEM',
      payload: itemInfo, itemSelected
    }
  }
}
export default actions