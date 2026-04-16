// api.js
import axios from 'axios';
import { setData } from './reducers';

export const fetchData = () => async (dispatch) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log("response",response)
        dispatch(setData(response));
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};