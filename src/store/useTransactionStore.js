import { create } from "zustand";

const useTransactionsStore = create((set) => ({
  transactions: [
    // {
    //   accountId: "4851",
    //   amount: "$10000",
    //   description: "Payment for services",
    // },
    { accountId: "4850", amount: "$25423", description: "Refund" },
    { accountId: "7892", amount: "$32237", description: "Purchase of goods" },
  ],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [transaction, ...state.transactions],
    })),
}));

export default useTransactionsStore;
