import { ACCOUNT_INFO } from '../actionTypes/index';

const initialState = {
  user: [],
};

export default function (state = initialState, action) {
  if (action.type == ACCOUNT_INFO) {

    var userArray = state.user;
    
    userArray = [...userArray,{
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      }];
    
    return {
      ...state,
      user: userArray
    }
  }
}