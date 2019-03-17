export default (state,action) => {
    if(state == undefined){
        return {v : 0, a : 1, b : 2}
    }
    switch(action.type){
        case "ADD":
            return {...state, v : state.v + 1}
        case "REMOVE":
            return {...state, v : state.v - 1}
        case "NUMBERTEXT":
            return {...state, v : state.v + action.numberText}
    }

    return state
}