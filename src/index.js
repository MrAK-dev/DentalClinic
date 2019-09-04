import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

import "./style/normalize.css";
import "./style/all.scss";
import "./style/style.css";
import "./style/select.scss";
import "./style/calendar.scss";
import "./style/auth.scss";
import "./style/modal.scss";
import "./style/checkBoxWindow.scss";
import "./style/user.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
