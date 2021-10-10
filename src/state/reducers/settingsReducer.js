const reducer = (state = { repository: '', buildCommand: '', mainBranch: '', synchro: '' }, action) => {
  switch (action.type) {
    case 'SAVE_SETTINGS':
      return action.settings;
    default:
      return state;
  }
};

export default reducer;
