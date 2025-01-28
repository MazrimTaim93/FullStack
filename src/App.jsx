/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import './App.css'
import About from ".../About.jsx"

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<NavBar />
		</BrowserRouter>
	)
}

function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/about">About Me</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</nav>
	)
}
function Home() {
	return (
		<>
			<h1>Hey :)</h1>

			
		</>
	);
}

export default App