import {
    PLAYER_LIST_REQUEST,
    PLAYER_LIST_SUCCESS,
    PLAYER_LIST_FAIL,

  } from '../constants/playerConstants';

import axios from 'axios';
import Axios from 'axios';
  
  const listPlayers = () => async (dispatch) => {
    try {
      dispatch({ type: PLAYER_LIST_REQUEST });
      const { data } = await axios.get('/api/players');
      dispatch({ type: PLAYER_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PLAYER_LIST_FAIL, payload: error.message });
    }
  };

  export {
    listPlayers
  };