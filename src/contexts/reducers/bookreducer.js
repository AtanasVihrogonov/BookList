// Reducer is all of our different function that we have to manipulate the state
import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
  // we need to check what the action type is
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        title: action.book.author,
        id: uuid()
      }]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id)
    default:
      return state
  }
}
