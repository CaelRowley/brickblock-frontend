const addTableauGraph = (graphUrl) => ({
  type: 'ADD_TABLEAU_GRAPH',
  graphUrl
});

const getTableauGraph = (graphId) => ({
  type: 'GET_TABLEAU_GRAPH',
  graphId
});

const addGraph = (graphUrl) => async (dispatch, getState) => {
  dispatch(addTableauGraph(graphUrl));
};

const getGraph = (graphId) => async (dispatch, getState) => {
  const state = getState();
  dispatch(downloadIPFS(dataCID, allFiles));
};

export default {
  addGraph,
  getGraph
};
