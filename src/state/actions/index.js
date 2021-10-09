export const saveSettingAction = (settings) => (dispatch) => {
  dispatch({
    type: 'save',
    settings,
  });
};
