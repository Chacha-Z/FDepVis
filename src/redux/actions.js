
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
    },
    selectFamily: function(id){
        return {
            type: 'SELECT_FAMILY',
            id
        }

    },
    selectPerson: function(id){
        return {
            type: 'SELECT_PERSON',
            id
        }

    }
}

export default actions;