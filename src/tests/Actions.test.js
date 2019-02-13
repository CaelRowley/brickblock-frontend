/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import { updateTableauUrl } from '../data/actions/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;
const tableauUrl = 'test';

describe('actions', () => {
  beforeEach(() => {
    store = mockStore({
    });
  });

  describe(`updateTableauUrl(${tableauUrl})`, () => {
    it(`Set the current tableau url to ${tableauUrl}`, () => store.dispatch(updateTableauUrl(tableauUrl)).then(() => {
      const expectedAction = {
        type: 'UPDATE_TABLEAU_URL',
        tableauUrl,
      };
      const action = store.getActions();
      expect(action[0]).to.eql(expectedAction);
    }));
  });
});