import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';
import "./base.scss";

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  );
});
