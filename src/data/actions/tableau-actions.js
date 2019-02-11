const updateUrl = tableauUrl => ({
  type: 'UPDATE_TABLEAU_URL',
  tableauUrl,
});

export const updateTableauUrl = tableauUrl => async (dispatch) => {
  dispatch(updateUrl(tableauUrl));
};
