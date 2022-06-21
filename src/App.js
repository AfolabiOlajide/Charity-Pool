import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Charities from "./pages/Charities";
import Nav from "./components/nav/Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="body">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Charities" element={<Charities />} />
					<Route path="/Dashboard" element={<Dashboard />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
