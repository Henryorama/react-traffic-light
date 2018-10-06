//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include your index.scss file into the bundle
import '../styles/index.scss';
import Trafficlight from './component/Trafficlight.jsx';
//render your react application
ReactDOM.render(
    <Trafficlight />,
    document.querySelector('#app')
);