import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import petReducer from './features/pet';

const store = configureStore({
    reducer: {
        pet: petReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>



);

