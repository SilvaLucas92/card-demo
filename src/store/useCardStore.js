import { create } from "zustand";

const useCardsStore = create((set) => ({
  cards: [
    {
      cardNumber: "1234 5678 9012 3456",
      cardHolderName: "John Dalton",
      expirationDate: "2024-09-13",
      cardType: "Visa",
    },
    {
      cardNumber: "9876 5432 1098 7654",
      cardHolderName: "Jane Smith",
      expirationDate: "2025-04-10",
      cardType: "Mastercard",
    },
  ],
  addCard: (card) =>
    set((state) => ({
      cards: [card, ...state.cards],
    })),
}));

export default useCardsStore;
