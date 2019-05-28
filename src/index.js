import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    console.warn("z",ze);
    module.hot.accept(); // already had this init code

    module.hot.addStatusHandler(status => {
        if (status === "prepare") console.clear();
    });
}
