import { PLAYER_LIST_FAIL } from "../constants/playerConstants";
import { PLAYER_LIST_SUCCESS } from "../constants/playerConstants";
import { PLAYER_LIST_REQUEST } from "../constants/playerConstants";


function playerListReducer(state = { players: [] }, action) {
    switch (action.type) {
      case PLAYER_LIST_REQUEST:
        return { loading: true, players: [] };
      case PLAYER_LIST_SUCCESS:
        return { loading: false, players: action.payload };
      case PLAYER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  export {
    playerListReducer
  };