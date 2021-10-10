export const modalShow = (payload) => (dispatch) => {
  dispatch({
    type: 'SHOW_MODAL',
    payload,
  });
};

export const modalClose = (payload) => (dispatch) => {
  dispatch({
    type: 'HIDE_MODAL',
    payload,
  });
};
