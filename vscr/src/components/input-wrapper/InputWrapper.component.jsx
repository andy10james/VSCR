import React, { Component } from 'react'
import SendButton from '../send-button/SendButton.component'
import "./input-wrapper.css";

class InputWrapper extends Component {
    sendMessage = (e) => {
        if (e.key === "Enter") {
            this.props.sendEvent();
        }
    };

    render() {
        return (
            <div className="input-wrapper__component">
                <textarea onKeyUp={this.sendMessage} className="input-wrapper__text-area" type="text" onChange={(event) => { this.props.onChange(event.target.value) }}></textarea>
                <SendButton sendEvent={this.props.sendEvent}/>
            </div>
        )
    }
}

export default InputWrapper
