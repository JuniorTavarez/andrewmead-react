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

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location} </p>;
//   }
// }

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    <p>{user.location ? 'Location: ' + user.location : ''}</p>
  </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
