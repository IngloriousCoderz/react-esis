import { createCounter } from "./02-factory";

it("should increment the value", () => {
  const counter = createCounter();
  counter.increment();

  expect(counter.value).toBe(1);
});

it("should decrement the value", () => {
  const counter = createCounter();
  counter.decrement(2);

  expect(counter.value).toBe(-2);
});

it("should reset the value", () => {
  const counter = createCounter();
  counter.reset();

  expect(counter.value).toBe(0);
});
