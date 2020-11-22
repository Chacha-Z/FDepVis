import state from "./state"

const reducers = (preState=state, action) => {
    switch(action.type){
        case 'ADD_FAMILY':
            return {
                ...preState,
                selectedFamily: [...preState.selectedFamily, action.id]
            }
        case 'REMOVE_FAMILY':
            return {
                ...preState,
                selectedFamily: preState.selectedFamily.filter((d)=>{return d !== action.id})
        }
        default:
            return {
                ...preState
            }
    }
}

export default reducers;