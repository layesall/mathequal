import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';

export default class App extends React.Component {

    state = {
        total: null,
        next: null,
        operation: null
    };

    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName));
    }

    render() {
        return (
            <div className="component-app">
                <Header />
                <Display value={this.state.next || this.state.total || "0"} />
                <ButtonPanel clickHandler={this.handleClick} />
                <Footer />
            </div>
        );
    }
}

