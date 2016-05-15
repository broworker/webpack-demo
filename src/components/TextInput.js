import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: 'initial text'
    };
  }

  deleteLetter() {
    // take current this.state.inputText
    // delete letter
    // update state
    let textStr = this.state.inputText;
    this.setState({
      inputText: textStr.substring(0, textStr.length - 1)
    });
  }

  handleChange(event) {
    // console.log('change detected');

    // console.log(event.target.value);
    this.setState({
      inputText: event.target.value
    });

  }


  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
      </div>

    );
  }
}

export default TextInput;
