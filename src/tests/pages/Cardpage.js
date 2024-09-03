import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fetchCards } from "../redux/slices/cardSlice";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import CardPage from "../../pages/Cardpage";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("CardPage Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      card: {
        cards: [],
        status: "idle",
        error: null,
      },
    });
  });

  test("should dispatch fetchCards on mount if status is idle", () => {
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <CardPage />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledWith(fetchCards());
  });

  test("should show loading indicator when status is loading", () => {
    store = mockStore({
      card: {
        cards: [],
        status: "loading",
        error: null,
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <CardPage />
      </Provider>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  test("should display cards when fetch is succeeded", () => {
    store = mockStore({
      card: {
        cards: [{ id: 1, cardNumber: "1234", cardHolderName: "John Doe" }],
        status: "succeeded",
        error: null,
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <CardPage />
      </Provider>
    );
    expect(getByText("1234 - John Doe")).toBeInTheDocument();
  });

  test("should show error message when fetch fails", () => {
    store = mockStore({
      card: {
        cards: [],
        status: "failed",
        error: "Failed to fetch",
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <CardPage />
      </Provider>
    );
    expect(getByText("Failed to fetch")).toBeInTheDocument();
  });

  test("should handle form submission correctly", async () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <CardPage />
      </Provider>
    );
    fireEvent.submit(getByRole("button")); // Assuming there's a submit button in CardForm
    await waitFor(() => {
      expect(getByText("Form values:")).toBeInTheDocument();
    });
  });
});
