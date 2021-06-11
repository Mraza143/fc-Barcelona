import { TROPHY_LIST_FAIL } from "../constants/trophyConstants";
import { TROPHY_LIST_SUCCESS } from "../constants/trophyConstants";
import { TROPHY_LIST_REQUEST } from "../constants/trophyConstants";


function trophyListReducer(state = { trophies: [] }, action) {
    switch (action.type) {
      case TROPHY_LIST_REQUEST:
        return { loading: true, trophies: [] };
      case TROPHY_LIST_SUCCESS:
        return { loading: false, trophies: action.payload };
      case TROPHY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  export {
    trophyListReducer
  };