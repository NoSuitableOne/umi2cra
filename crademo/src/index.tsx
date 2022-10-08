import React from "react";
import ReactDOM from "react-dom";
import moment from 'moment';
import { IntlProvider } from "react-intl";
import zh_CN from '@/locales/zh-CN';
import en_US from '@/locales/en-US';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '@/models/reducer';
import appSaga from '@/models/saga';
import { ConfigProvider } from 'antd';
import App from '@/app';

moment.locale('zh-cn');

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <IntlProvider
          locale={'zh-CN'}
          messages={zh_CN}
        >
          <ConfigProvider locale={zhCN}>
            <App />
          </ConfigProvider>
        </IntlProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// then run the saga
sagaMiddleware.run(appSaga);

// render the application
render();

// saga subscribe
store.subscribe(render);
