'use strict';

var appObject = {
  title: 'Indicition App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObject.title
  ),
  appObject.subtitle && React.createElement(
    'p',
    null,
    ' ',
    appObject.subtitle,
    ' '
  ),
  React.createElement(
    'p',
    null,
    appObject.options.length > 0 ? appObject.options[0] : appObject.options[1]
  )
);

var user = {
  name: 'Junior',
  age: 18,
  location: 'Jersey'
};

var count = 0;
var addOne = function addOne() {
  return console.log('+1');
};
var subtractOne = function subtractOne() {
  return console.log('-1');
};
var reset = function reset() {
  return console.log('reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: subtractOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);

var appRoot = document.querySelector('#app');

ReactDOM.render(templateTwo, appRoot);
