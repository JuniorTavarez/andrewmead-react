'use strict';

// JSX - Javascript XML

var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js ey check'
);
var domContainer = document.querySelector('#app');

ReactDOM.render(template, domContainer);
