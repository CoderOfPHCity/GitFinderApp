
const AlertReduce = (state, action) =>{
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload
        case 'RMV':
            return null
        default:
            return state
    }
}

export default AlertReduce;