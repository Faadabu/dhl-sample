const initialState = {
    scrolling: false
};

const scrollreducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case "SCROLLING":
        return {
            ...state,
            scrolling: true
        }

        case "NOT_SCROLLING":
        return {
            ...state,
            scrolling: false
        }
    
        default:
        return {
            ...state
        }
    }
}

export default scrollreducer;

