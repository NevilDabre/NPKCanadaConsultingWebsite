import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SubscribeForm from './components/subscribeForm/subscribeForm';
import ContactForm from './components/contactForm/contactForm'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SubscribeForm />, document.getElementById('subscribe_list'));
ReactDOM.render(<ContactForm />, document.getElementById('contact_form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
