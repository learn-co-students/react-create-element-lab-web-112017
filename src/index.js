import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const header = React.createElement('h1',{},'An Awesome Person')
const pElement = React.createElement('p', {}, 'Who is learning React')

const liJS = React.createElement('li', {}, "JavaScript")
const liReact = React.createElement('li', {}, "React")
const liMovies = React.createElement('li', {}, "Movies")
const liIceCream = React.createElement('li', {}, "Ice cream")

const list = React.createElement('ul', {className: "my-interests"},[liJS, liReact, liMovies, liIceCream])

const meInReact = React.createElement('div', {className:"me"}, [header,pElement, list])



ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
