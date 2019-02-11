const updateHomeText = homeText => ({
  type: 'CHANGE_HOME_TEXT',
  homeText,
});

export const changeHomeText = () => async (dispatch) => {
  dispatch(updateHomeText('this is the new text'));
};
