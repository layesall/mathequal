import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import "../styles/ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    handlerClick = buttonName => {
        this.props.clickHandler(buttonName);
    }
    
    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="AC" clickHandler={this.handlerClick} />
                    <Button name="+/-" clickHandler={this.handlerClick} />
                    <Button name="%" clickHandler={this.handlerClick} />
                    <Button name="÷" clickHandler={this.handlerClick} btnDark />
                </div>
                <div>
                    <Button name="7" clickHandler={this.handlerClick} />
                    <Button name="8" clickHandler={this.handlerClick} />
                    <Button name="9" clickHandler={this.handlerClick} />
                    <Button name="x" clickHandler={this.handlerClick} btnDark />
                </div>
                <div>
                    <Button name="4" clickHandler={this.handlerClick} />
                    <Button name="5" clickHandler={this.handlerClick} />
                    <Button name="6" clickHandler={this.handlerClick} />
                    <Button name="-" clickHandler={this.handlerClick} btnDark />
                </div>
                <div>
                    <Button name="1" clickHandler={this.handlerClick} />
                    <Button name="2" clickHandler={this.handlerClick} />
                    <Button name="3" clickHandler={this.handlerClick} />
                    <Button name="+" clickHandler={this.handlerClick} btnDark />
                </div>
                <div>
                    <Button name="0" clickHandler={this.handlerClick} />
                    <Button name="." clickHandler={this.handlerClick} />
                    <Button name="=" clickHandler={this.handlerClick} btnDark />
                </div>
    
            </div>
        );
    }
};
