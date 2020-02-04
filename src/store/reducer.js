const initialState = {
    clinics: [],
    counter: 0
}

const rootReducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "ALL_CLINICS":
            return {
                ...state,
                clinics: action.value
            }
        case "ADD_COUNTER":
            return {
                ...state,
                counter: action.value
            }
            default:
                return state;
    }
}

export default rootReducer;