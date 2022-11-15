const INITIAL_VALUE = 0;

export function Counter() {
  this.value = INITIAL_VALUE;

  this.increment = (amount = 1) => {
    this.value += amount;
  };

  this.decrement = (amount = 1) => {
    this.value -= amount;
  };

  this.reset = () => {
    this.value = INITIAL_VALUE;
  };
}
