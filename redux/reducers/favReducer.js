import { SAVE_BOOK, UNSAVE_BOOK } from '../actionTypes/index';

const initialState = {
  fav_books: [],
};

export default function (state = initialState, action) {
  if (action.type == SAVE_BOOK) {
    var myarray = state.fav_books;
    myarray = [...myarray,{
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        image: action.payload.image,
        desc: action.payload.desc,
        isFav: true,
      }];    
    return {
      ...state,
      fav_books: myarray
    }
  }

  if (action.type == UNSAVE_BOOK) {
    const {id} = action.payload
    return {
      ...state,
      isFav: false,
      fav_books: state.fav_books.filter((list) => list.id != id)
    };
  }
  return state;
}