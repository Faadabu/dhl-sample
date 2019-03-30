const initialState = {
    otherData: [
    { x: "  MAR", y: 700, y0: 0 },
    { x: "  APR", y: 1490, y0: 0 },
    { x: "  MAY", y: 2190, y0: 0 },
    { x: "  JUN", y: 1485, y0: 0 },
    { x: "  JUL", y: 1550, y0: 0 },
    { x: "  AUG", y: 1500, y0: 0 }
  ]};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    
    return newState;
}

export default reducer;