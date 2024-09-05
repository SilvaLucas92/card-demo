import { create } from "zustand";

const useCustomerStore = create((set) => ({
  customers: [
    {
      customerId: "C001",
      firstName: "John",
      lastName: "Scott",
      addressLine1: "123 Main St",
      addressLine2: "",
      addressLine3: "",
      stateCode: "CA",
      countryCode: "US",
      zipCode: "90001",
      phoneNumber1: "555-1234",
      phoneNumber2: "",
      ssn: "145-77-1632",
      govtIssuedId: "A9244725",
      dob: "1980-01-01",
      eftAccountId: "EFT001",
      primaryCardIndicator: "Y",
      ficoCreditScore: "750",
    },
    {
      customerId: "C002",
      firstName: "Jane",
      middleName: "Alicia",
      lastName: "Smith",
      addressLine1: "456 Elm St",
      addressLine2: "",
      addressLine3: "",
      stateCode: "NY",
      countryCode: "US",
      zipCode: "10001",
      phoneNumber1: "555-5678",
      phoneNumber2: "",
      ssn: "236-65-3452",
      govtIssuedId: "B7353834",
      dob: "1990-05-15",
      eftAccountId: "EFT002",
      primaryCardIndicator: "N",
      ficoCreditScore: "680",
    },
  ],

  addCustomer: (customer) =>
    set((state) => ({
      customers: [customer, ...state.customers],
    })),
}));

export default useCustomerStore;
