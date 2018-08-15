import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

import MyComponent from './components/MyComponent';
import MyInput from './components/MyInput';

import styles from './App.css';

const App = () => (
    <div>
        <p className={styles.textColor}>
            React here
        </p>
        <MyInput />
        <MyComponent />
    </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
