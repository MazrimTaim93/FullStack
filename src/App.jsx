/* eslint-disable react/no-unescaped-entities */
import { Route, Routes } from "react-router-dom"
import './App.css'
import About from "./pages/About.jsx"
import MainLayout from "./layouts/MainLayout"
import Characters from "./pages/Characters"
import Class from "./pages/Class"
import Ancestry from "./pages/Ancestry"
import Rusty from "./pages/Rusty"
import Home from "./pages/ReactHome"
import Background from "./pages/Background"
import AuthRoute from "./pages/AuthRoute"
import Login from "./pages/Login"
import Info from "./pages/Info"
import CharacterSheet from "./pages/CharacterSheet"


const NotFound = () => (<MainLayout title="Home"> <h1>Page not found</h1> </MainLayout>)

function App() {

	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/background" element={<Background />} />
				<Route path="/login" element={<Login />} />
				<Route path="/info" element={<Info /> } />
				<Route element={<AuthRoute />}>
					<Route path="/characters" element={<Characters />} />
				</Route>
				<Route path="/charactersheet/:id" element={<CharacterSheet /> } />
				<Route path="/class" element={<Class />} />
				<Route path="/ancestry" element={<Ancestry />} />
				<Route path="/rusty" element={<Rusty />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App