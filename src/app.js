'use strict';

const appObject = {
  title: 'Indicition App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two'],
};

// JSX - Javascript XML
const template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p> {appObject.subtitle} </p>}
    <p>
      {appObject.options.length > 0
        ? appObject.options[0]
        : appObject.options[1]}
    </p>
  </div>
);

const user = {
  name: 'Junior',
  age: 18,
  location: 'Jersey',
};

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const subtractOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  const appRoot = document.querySelector('#app');

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
