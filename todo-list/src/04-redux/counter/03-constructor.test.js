import { Counter } from "./03-constructor";

it("should increment the value", () => {
  const counter = new Counter();
  counter.increment();

  expect(counter.value).toBe(1);
});

it("should decrement the value", () => {
  const counter = new Counter();
  counter.decrement(2);

  expect(counter.value).toBe(-2);
});

it("should reset the value", () => {
  const counter = new Counter();
  counter.reset();

  expect(counter.value).toBe(0);
});
