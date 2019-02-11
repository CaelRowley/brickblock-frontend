const updateUrl = (tableauUrl) => ({
  type: 'UPDATE_TABLEAU_URL',
  tableauUrl
});

export const updateTableauUrl = (tableauUrl) => async (dispatch, getState) => {
  console.log("in actions: " + tableauUrl);
  dispatch(updateUrl(tableauUrl));
};
