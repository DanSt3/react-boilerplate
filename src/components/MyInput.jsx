import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

import cx from 'classnames';
import styles from './MyInput.css';

class MyInput extends Component {
    static toTitleCase(text) {
        return text.toLowerCase().split(' ').map(word => (
            (word !== '') ? word.replace(word[0], word[0].toUpperCase()) : ''
        ))
            .join(' ');
    }

    constructor(props) {
        super(props);
        this.state = {
            inputText: 'Text goes here',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ inputText: MyInput.toTitleCase(event.target.value) });
    }

    render() {
        const { inputText } = this.state;
        return (
            <div>
                <input
                    type="text"
                    name="myInput"
                    size="40"
                    value={inputText}
                    className={cx(styles.textColor, styles.margins)}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default MyInput;
