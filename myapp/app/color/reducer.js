export default (state = {
    "r": 0,
    "g": 0,
    "b": 0
}, action) => {
    switch (action.type) {
        case "CHANGE":
            return { ...state,
                [action.rgb]: action.value
            }
        default:
            return state;
    }
}