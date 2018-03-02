import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers'
import './index.css';
import App from './containers/app/App'
import registerServiceWorker from './registerServiceWorker';
const boundCompose = compose.bind(null,applyMiddleware(thunk));const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? boundCompose(window.__REDUX_DEVTOOLS_EXTENSION__()) : boundCompose()
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();