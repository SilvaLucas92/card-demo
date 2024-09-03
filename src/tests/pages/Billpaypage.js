import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/reducers";
import { fetchBillPays } from "../redux/slices/billPaySlice";
import BillPayPage from "../../pages/Billpaypage";

jest.mock("../redux/slices/billPaySlice");

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("BillPayPage", () => {
  it("should render without crashing", () => {
    const { getByText } = renderWithRedux(<BillPayPage />);
    expect(getByText(/Bill Pay/i)).toBeInTheDocument();
  });

  it("dispatches fetchBillPays on initial render when status is idle", () => {
    fetchBillPays.mockImplementation(() => ({ type: "billPay/fetchBillPays" }));
    const initialState = { billPay: { status: "idle" } };
    renderWithRedux(<BillPayPage />, { initialState });
    expect(fetchBillPays).toHaveBeenCalled();
  });

  it("shows loading indicator when status is loading", () => {
    const initialState = { billPay: { status: "loading" } };
    const { getByText } = renderWithRedux(<BillPayPage />, { initialState });
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("displays bill pays when status is succeeded", () => {
    const initialState = {
      billPay: {
        status: "succeeded",
        billPays: [{ id: 1, description: "Utility", amount: 100 }],
      },
    };
    const { getByText } = renderWithRedux(<BillPayPage />, { initialState });
    expect(getByText(/Utility - \$100/i)).toBeInTheDocument();
  });

  it("shows error message when status is failed", () => {
    const initialState = {
      billPay: { status: "failed", error: "Error fetching data" },
    };
    const { getByText } = renderWithRedux(<BillPayPage />, { initialState });
    expect(getByText(/Error fetching data/i)).toBeInTheDocument();
  });
});
