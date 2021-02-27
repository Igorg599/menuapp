const initialState = {
    items: null
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                items: action.payload,
            };
        
        default:
            return state;
    }
};

export default data;