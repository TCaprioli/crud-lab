import React from 'react';
import ReactDOM from 'react-dom';
import { Party } from './components/Party';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Party />
  </React.StrictMode>,
  document.getElementById('root')
);

