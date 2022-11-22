import { createSelector } from "@reduxjs/toolkit";

export const selectText = (state) => state.text;
export const selectList = (state) => state.list;

// export const selectTask = (state, id) =>
//   selectList(state).find((task) => task.id === id);
export const selectTask = createSelector(
  selectList,
  (state, id) => id,
  (list, id) => list.find((task) => task.id === id)
);

// function Task({id}) {
//   const task = useSelector((state) => selectTask(state, id))

//   return <li>
//     <span>{task.name}</span>
//   </li>
// }

// export const selectIsTaskCompleted = (state, id) =>
//   !!selectTask(state, id).completed;

export const selectIsTaskCompleted = createSelector(
  selectTask,
  (task) => !!task.completed
);

// const state = {
//   firstName: "Matteo Antony",
//   lastName: "Mistretta",
// };

// const selectFirstName = (state) => state.firstName;
// const selectLastName = (state) => state.lastName;
// const selectFullName = (state) => {
//   const firstName = selectFirstName(state);
//   const lastName = selectLastName(state);
//   return `${firstName} ${lastName}`;
// };

// const selectFullName = createSelector(
//   selectFirstName,
//   selectLastName,
//   (firstName, lastName) => `${firstName} ${lastName}`
// );
