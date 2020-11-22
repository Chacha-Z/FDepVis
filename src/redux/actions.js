
const actions = {
    addFamily: function(id){
        return {
            type: 'ADD_FAMILY',
            id
        }
    },
    removeFamily: function(id){
        return {
            type: 'REMOVE_FAMILY',
            id
        }
    }
}

export default actions;