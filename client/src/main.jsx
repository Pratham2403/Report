/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers/index.js";
import axios from "axios";

//
const BACKEND_PORT = "8000";
//
axios.defaults.baseURL = `http://localhost:${BACKEND_PORT}/api`;
axios.defaults.withCredentials = true;

const store = configureStore({ reducer: reducers });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NextUIProvider>
			<Provider store={store}>
				<GoogleOAuthProvider clientId="700021542217-6gp4ae8h5c8tdbs8dn1mmfs1avrurh2c.apps.googleusercontent.com">
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</GoogleOAuthProvider>
			</Provider>
		</NextUIProvider>
	</React.StrictMode>
);
