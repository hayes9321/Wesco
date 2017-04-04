

function getId(state){
  console.log(state)

  return state.itemSelected.reduce((maxId, i) => {
    return Math.max(i.id, maxId)
  }, -1) + 1
}

let ModalState = (state = {itemSelected: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        itemSelected:[{
          id: getId(state),
          active: true,
          itemInfo: action.payload.itemInfo,
          itemSelected: action.payload.itemSelected
        }, ...state.itemSelected]      
      })
    default:
      return state
  }
}

export default ModalState;