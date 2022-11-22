import { selectIsTaskCompleted, selectTask } from "./selectors";

describe("Selectors", () => {
  it("should select a task given its id", () => {
    const state = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const id = 2;

    const task = selectTask(state, id);

    expect(task).toEqual({ id: 2, text: "Look for a job", completed: false });
  });

  it("should tell if the task is completed given its id", () => {
    const state = {
      text: "some text",
      list: [
        { id: 1, text: "Learn Redux", completed: true },
        { id: 2, text: "Look for a job", completed: false },
        { id: 3, text: "Forget everything" },
      ],
    };
    const id = 2;

    const isCompleted = selectIsTaskCompleted(state, id);

    expect(isCompleted).toEqual(false);
  });
});
