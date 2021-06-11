import {
    TROPHY_LIST_REQUEST,
    TROPHY_LIST_SUCCESS,
    TROPHY_LIST_FAIL,

  } from '../constants/trophyConstants';

import axios from 'axios';
import Axios from 'axios';
  
  const listTrophies = () => async (dispatch) => {
    try {
      dispatch({ type: TROPHY_LIST_REQUEST });
      const { data } = await axios.get('/api/trophies');
      dispatch({ type: TROPHY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TROPHY_LIST_FAIL, payload: error.message });
    }
  };

  export {
    listTrophies
  };