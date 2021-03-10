export const initialState = {
  movies: [],
  series: [],
  isLoading: false,
  hasErrors: false,
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_DATA':
      return {
        ...state,
        [action.programType]: [...state[action.programType].concat(action[action.programType])],
        isLoading: false
      }
    case 'REQUEST_ERROR':
      return {
        ...state,
        hasErrors: true,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}

export default reducer;
