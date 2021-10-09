const reducer = (state = { repository: '', buildCommand: '', mainBranch: '', synchro: '' }, action) => {
  console.log(action);
  switch (action.type) {
    case 'save':
      return action.settings;
    default:
      return state;
  }
};

export default reducer;
