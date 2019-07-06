import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './screens/Root'

import { appName } from './constants';

let el = document.getElementById('ui-booster');

if (!el) {
    el = document.createElement('div');
    el.id = appName;    
    document.body.appendChild(el);
}
ReactDOM.render(<Root />, el);

// console.log('hey!');
