import { SAVE_SEARCH, UNSAVE_SEARCH } from '../actionTypes/index';

const initialState = {
  search_history: [],
};

export default function (state = initialState, action) {
  if (action.type == SAVE_SEARCH) {
    var profileHistory = state.search_history;
    
    profileHistory=[...profileHistory,{
        searchKey: action.payload.searchKey,
         id: action.payload.id,
    }];    
    return {
      ...state,
      search_history: profileHistory
    };
  }

  if (action.type == UNSAVE_SEARCH) {
    const {id} = action.payload
    return{
      ...state,
      search_history: state.search_history.filter((list) => list.id != id)

    }
  }

  return state;
}