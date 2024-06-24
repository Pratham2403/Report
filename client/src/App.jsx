/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Posts from "./pages/Posts/Posts";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/home" element={<Home />} />
				<Route path="/auth" element={<Auth />} />
				<Route path="/profile/:userId" element={<Posts/>} />
			</Routes>
		</main>
	);
}

export default App;
