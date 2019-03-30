const initialState = {
    sampleData: [
    { x: "  MAR", y: 1200, y0: 0 },
    { x: "  APR", y: 1505, y0: 0 },
    { x: "  MAY", y: 2100, y0: 0 },
    { x: "  JUN", y: 1550, y0: 0 },
    { x: "  JUL", y: 1585, y0: 0 },
    { x: "  AUG", y: 2100, y0: 0 }
  ]};

const sampledatareducer = (state = initialState, action) => {
    const newState = {...state};
    
    return newState;
}

export default sampledatareducer;