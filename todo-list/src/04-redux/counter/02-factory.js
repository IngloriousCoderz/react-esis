const INITIAL_VALUE = 0;

export function createCounter() {
  return {
    value: INITIAL_VALUE,

    increment(amount = 1) {
      this.value += amount;
    },

    decrement(amount = 1) {
      this.value -= amount;
    },

    reset() {
      this.value = INITIAL_VALUE;
    },
  };
}
