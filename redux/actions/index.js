import {
  SAVE_BOOK,
  UNSAVE_BOOK,
  SAVE_SEARCH,
  UNSAVE_SEARCH,
  SAVE_VIEW,
  ACCOUNT_INFO,
} from '../actionTypes';

let favId = 0;
let searchId = 0;

export const FavBook = (title, author, image, desc) => ({
  type: SAVE_BOOK,
  payload: {
    id: ++favId,
    title: title,
    author: author,
    image: image,
    desc: desc,
  }
});

export const UnfavBook = (id) => ({
  type: UNSAVE_BOOK,
  payload: {
    id
  }
});

export const SaveSearch = (key) => ({
  type: SAVE_SEARCH,
  payload: {
    id: ++searchId,
    searchKey: key
  },
});

export const UnsaveSearch = (id) => ({
  type: UNSAVE_SEARCH,
  payload:{
    id
  },
});

export const viewedBooks = (name, author, isbn) => {
  return {
    type: SAVE_VIEW,
    payloadd: {
      viewName: name,
      viewAuthor: author,
      viewISBN: isbn,
    },
  };
};

export const Account = (username, email, password) => {
  return {
    type: ACCOUNT_INFO,
    payload: {
      username: username,
      email: email,
      password: password,
    },
  };
};
