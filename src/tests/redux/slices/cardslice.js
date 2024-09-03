import { fetchCards, addCard } from '../slices/cardslice';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('cardSlice async thunks', () => {
  let store;
  let mock;

  beforeEach(() => {
    store = configureStore({ reducer: { card: require('../slices/cardslice').default } });
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  test('fetchCards dispatches fulfilled action on successful API call', async () => {
    const cards = [{ id: 1, title: 'Test Card' }];
    mock.onGet('/api/cards').reply(200, cards);
    await store.dispatch(fetchCards());
    const state = store.getState().card;
    expect(state.cards).toEqual(cards);
    expect(state.status).toBe('succeeded');
  });

  test('fetchCards dispatches rejected action on API failure', async () => {
    mock.onGet('/api/cards').networkError();
    await store.dispatch(fetchCards());
    const state = store.getState().card;
    expect(state.status).toBe('failed');
    expect(state.error).toBeDefined();
  });

  test('addCard dispatches fulfilled action on successful API call', async () => {
    const newCard = { title: 'New Card' };
    const expectedResponse = { id: 2, title: 'New Card' };
    mock.onPost('/api/cards', newCard).reply(200, expectedResponse);
    await store.dispatch(addCard(newCard));
    const state = store.getState().card;
    expect(state.cards).toContainEqual(expectedResponse);
  });

  test('addCard should update the state with the new card', async () => {
    const newCard = { title: 'Another New Card' };
    const expectedResponse = { id: 3, title: 'Another New Card' };
    mock.onPost('/api/cards', newCard).reply(200, expectedResponse);
    await store.dispatch(addCard(newCard));
    const state = store.getState().card;
    expect(state.cards).toContainEqual(expectedResponse);
  });

  test('Initial state is correct', () => {
    const state = store.getState().card;
    expect(state.cards).toEqual([]);
    expect(state.status).toBe('idle');
    expect(state.error).toBeNull();
  });
});