import axios from 'axios';


export const fetchData = () => (dispatch)  => {
    axios.get('/src/db.json/items').then (({data}) => {
        dispatch(setData(data));
    });
};

export const setData = (items) => ({
    type: 'SET_DATA',
    payload: items,
});