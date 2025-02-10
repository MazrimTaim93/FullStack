/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import About from "./pages/About.jsx"
import MainLayout from "./layouts/MainLayout"
import Bootstrap from "./pages/Bootstrap"
import Characters from "./pages/Characters"
import Class from "./pages/Class"
import Ancestry from "./pages/Ancestry"
import Rusty from "./pages/Rusty"

const Home = () => (<MainLayout title="Home"> <h1>This is my home page</h1> </MainLayout>)
const NotFound = () => (<MainLayout title="Home"> <h1>Page not found</h1> </MainLayout>)

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/bootstrap" element={<Bootstrap />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/class" element={<Class />} />
				<Route path="/ancestry" element={<Ancestry />} />
				<Route path="/rusty" element={<Rusty />} />
				<Route NotFound="*" element={<NotFound /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App