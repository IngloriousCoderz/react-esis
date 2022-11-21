import { counter } from "./01-object";

describe("Counter App - Object", () => {
  it("should increment the value", () => {
    counter.reset();
    counter.increment();

    expect(counter.value).toBe(1);
  });

  it("should decrement the value", () => {
    counter.reset();
    counter.decrement(2);

    expect(counter.value).toBe(-2);
  });

  it("should reset the value", () => {
    counter.reset();

    expect(counter.value).toBe(0);
  });
});
