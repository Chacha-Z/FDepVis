import state from "./state"

const reducers = (preState=state, action) => {
    switch(action.type){
        case 'ADD_FAMILY':
            return {
                ...preState,
                selectedFamily: [...preState.selectedFamily, action.id],
                focusFamily: action.id
            }
        case 'REMOVE_FAMILY':
            return {
                ...preState,
                selectedFamily: preState.selectedFamily.filter((d)=>{return d !== action.id}),
                focusFamily: modifyFocusFa(preState, action)
            }
        case 'SELECT_FAMILY':
            return {
                ...preState,
                focusFamily: action.id
            }
        case 'SELECT_PERSON':
            return {
                ...preState,
                focusPerson: action.id
            }
        default:
            return {
                ...preState
            }
    }
}

export default reducers;

function modifyFocusFa(preState, action){
    console.log(preState.selectedFamily[preState.selectedFamily.length-1])
    return preState.selectedFamily[preState.selectedFamily.length-1] === action.id ? preState.selectedFamily[preState.selectedFamily.length-2]:preState.selectedFamily[preState.selectedFamily.length-1]
}