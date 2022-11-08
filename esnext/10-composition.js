/** 'hello world' -> 'HELLO WORLD' -> 'HELLO WORLD!' -> '<p>HELLO WORLD!</p>' */

{
  const shout = (str) => str.toUpperCase();
  const punctuate = (str, punctuation) => str + punctuation;
  const wrap = (str, tag) => `<${tag}>${str}</${tag}>`;

  console.log(shout("hello world"));
  console.log(punctuate("hello world", "!"));
  console.log(wrap("hello world", "p"));

  console.log(
    //
    wrap(
      //
      punctuate(
        shout("hello world"),
        //
        "!"
      ),
      "p"
    )
  );
}

const shout = (str) => str.toUpperCase();
const punctuate = (punctuation) => (str) => str + punctuation;
const wrap = (tag) => (str) => `<${tag}>${str}</${tag}>`;

console.log(shout("hello world"));
console.log(punctuate("!")("hello world"));
console.log(wrap("p")("hello world"));

const exclamate = punctuate("!");

console.log(exclamate("hello world"));
console.log(exclamate("ho capito"));

const wrapInP = wrap("p");

console.log(wrapInP("hello world"));
console.log(wrapInP("ho capito"));

console.log(
  //
  wrapInP(
    //
    exclamate(
      //
      shout("hello world")
    )
  )
);

const strings = ["hello", "world", "how", "are", "you"];

console.log(strings.map((str) => shout(str)));
console.log(strings.map(shout));

console.log(strings.map((str) => punctuate("!")(str)));
console.log(strings.map(punctuate("!")));
console.log(strings.map(exclamate));

console.log(strings.map((str) => wrapInP(exclamate(shout(str)))));

{
  let message = "hello world"; // initialize
  message = shout(message); // accumulate
  message = exclamate(message); // accumulate
  message = wrapInP(message); // accumulate
  console.log(message); // return
}

{
  const funcs = [shout, exclamate, wrapInP];
  let message = "hello world";
  for (const func of funcs) {
    message = func(message);
  }
  console.log(message);
}

const funcs = [shout, exclamate, wrapInP];
const message = funcs.reduce((acc, func) => func(acc), "hello world");

console.log(message);

{
  function pipe(funcs, x) {
    return funcs.reduce((acc, func) => func(acc), x);
  }
  console.log(pipe([shout, exclamate, wrapInP], "hello world"));
}

{
  const pipe =
    (...funcs) =>
    (x) =>
      funcs.reduce((acc, func) => func(acc), x);
  console.log(pipe(shout, exclamate, wrapInP)("hello world"));

  const htmlize = pipe(shout, exclamate, wrapInP);

  console.log(htmlize("hello world"));

  const strings = ["hello", "world", "how", "are", "you"];
  console.log(strings.map(htmlize));
}

// (f o g)(x) = f(g(x))
{
  const compose =
    (...funcs) =>
    (x) =>
      funcs.reduceRight((acc, func) => func(acc), x);
  const htmlize = compose(wrapInP, exclamate, shout);
  console.log(htmlize("hello world"));
}
