import React, { Component } from 'react';
import { render } from 'react-dom';
import Wrapper from './components/mainContainer.jsx';


import './styles/style.css';

class App extends Component {
    render() {
        return (
            <div>
                <Wrapper />
            </div>
        )   
    }
}

render(<App />, document.querySelector('#root'));