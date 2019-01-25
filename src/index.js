import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter, connectRouter, routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginReducer from "./store/reducers/login";
import { watchLogin, watchLogout} from "./store/sagas";
import { history } from '../src/shared/history';
import { push } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react'




import './index.css';
import App from './App';

const persistConfig = {
    key: 'root',
    storage,
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    router: connectRouter(history),
    login: loginReducer
});
const routersMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routersMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    connectRouter(history)(persistedReducer),
    {},
    composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchLogout);

const app = (
    <Provider  store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter  history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));