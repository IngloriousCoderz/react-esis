import { createSelector } from "@reduxjs/toolkit";

export const selectText = (state) => state.text;
export const selectList = (state) => state.list;

const state = {
  firstName: "Matteo Antony",
  lastName: "Mistretta",
};

const selectFirstName = (state) => state.firstName;
const selectLastName = (state) => state.lastName;
const selectFullName = (state) => {
  const firstName = selectFirstName(state);
  const lastName = selectLastName(state);
  return `${firstName} ${lastName}`;
};
