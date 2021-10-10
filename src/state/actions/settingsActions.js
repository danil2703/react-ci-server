export const settingsSaveAction = (settings) => (dispatch) => {
  dispatch({
    type: 'SAVE_SETTINGS',
    settings,
  });
};
