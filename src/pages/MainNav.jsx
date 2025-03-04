import { Link, useNavigate } from "react-router-dom"

const WORDPRESS_IMAGES = {
	uvulogo: "https://www.prof-fahim.online/cs3660wp/wp-content/uploads/2025/01/utah-valley-university.svg"
}

const login = () => {
	alert("Logged in.")
}

const MainNav = () => {
	const navigate = useNavigate();

    return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={WORDPRESS_IMAGES.uvulogo} alt="logo" width="75" height="24" className="d-inline-block" />
					<span className="ms-2">Demo React App</span>
				</Link>
				
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/characters">Characters</Link>
						</li>
					</ul>
				</div>
				<button className="btn btn-success ms-auto mr-1" onClick={() => navigate("/login")} >
					Login
				</button>
			</div>
		</nav>
    )
}

export default MainNav