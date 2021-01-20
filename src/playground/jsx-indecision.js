'use strict';

const app = {
  title: 'Indicition App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  render();
};

const onRemoveAll = () => {
  app.options.splice(0, app.options.length);
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
  render();
};

const appRoot = document.querySelector('#app');

const render = () => {
  // JSX - Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p> {app.subtitle} </p>}
      <p>{app.options.length > 0 ? 'Here are your Options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What Should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form action="" onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
