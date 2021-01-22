import React from 'react'

import store from "./store";
import { Provider } from "react-redux";

import Main from './pages/main'

function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
export default App;
