const initialState = {
  title: '',
  text: '',
  type: '',
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return action.payload;
    case 'HIDE_MODAL':
      return initialState;
    default:
      return state;
  }
};

export default reducer;
