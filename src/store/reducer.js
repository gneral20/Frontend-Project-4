const initialState = {
    clinics: [],
    counter: 0,
    clinic: {}
}

const rootReducer = (state=initialState, action) => {
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
        case "ONE_CLINIC":
            return {
                ...state,
                clinic: action.value
            }
            default:
                return state;
    }
}

export default rootReducer;