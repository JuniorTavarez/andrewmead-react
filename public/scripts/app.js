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

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location} </p>;
//   }
// }

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    user.location ? 'Location: ' + user.location : ''
  )
);

var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
