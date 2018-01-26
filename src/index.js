import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const title = React.createElement('h1', {}, "An Awesome Person")
const para = React.createElement('p', {}, "Who is learning React")

const item1 = React.createElement('li', {}, "JavaScript")
const item2 = React.createElement('li', {}, "React")
const item3 = React.createElement('li', {}, "Movies")
const item4 = React.createElement('li', {}, "Ice cream")
const list = React.createElement('ul', {className: "my-interests"}, [
  item1, item2, item3, item4
])

const meInReact = React.createElement('div', {className: 'me'}, [title, para, list])

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
