import state from "./state"

const reducers = (preState=state, action) => {
    switch(action.type){
        case 'TEST_ACTION':
            console.log('yes')
            return {
                ...preState,
                num: preState.num+action.value
            }
        default:
            return {
                ...preState
            }
    }
}

export default reducers;