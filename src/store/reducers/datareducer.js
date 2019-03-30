const initialState = {
    data: [
        {
            id : 1,
            title: "Total Requests",
            value: "5,129"
        },
        {
            id : 2,
            title: "Active Trips",
            value: "129"
        },
        {
            id : 3,
            title: "Completed Trips",
            value: "2,002"
        },
        {
            id : 4,
            title: "Total Revenue",
            value: "#23,000,237"
        },
        {
            id : 5,
            title: "Pending Requests",
            value: "15"
        }
    ]
}

const datareducer = (state = initialState, action) => {
    const newState = {...state};
    return newState;
}

export default datareducer;