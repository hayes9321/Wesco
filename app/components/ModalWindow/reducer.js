

function getId(state){
  return state.itemSelected.reduce((maxId, i) => {
    return Math.max(i.id, maxId)
  }, 0) + 1
}

function calcItemsInPrice(state, price){
  return state.priceTotal.reduce((prev, price) =>{
    return price + prev;
  }, 0) + price;
}

function calcItemsInGmcPrice(state, price){
  return state.gmcPriceTotal.reduce((prev, price) =>{
    return price + prev
  }, 0) + price;
}

let ModalState = (state = {priceTotal: [0], gmcPriceTotal: [0], itemSelected: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM': 
      return Object.assign({}, state, {
        priceTotal: [calcItemsInPrice(state, parseFloat(action.payload.itemSelected))],
        gmcPriceTotal: [calcItemsInGmcPrice(state, parseFloat(action.payload.itemInfo.clubPrice))],
        itemSelected:[{
          id: getId(state),
          active: true,
          itemInfo: action.payload.itemInfo,
          itemSelected: action.payload.itemSelected
        }, ...state.itemSelected]      
      })
    case 'REMOVE_ITEM':
      return Object.assign({}, state, {
        itemSelected: state.itemSelected.filter((item) =>{
          return item.id !== action.payload.id
        })
      })
    default:
      return state
  }
}

export default ModalState;