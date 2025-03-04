import { Link } from "react-router-dom"
import { useState } from "react"
import MainLayout from "../layouts/MainLayout";
import axios from "axios";

const Info = () => {
	const [name, setName] = useState();
	const [type, setType] = useState("male");

	const fetchName = () => {
		axios.get(`https://namey.muffinlabs.com/name.json?count=1&type=${type}&with_surname=true`)
			.then((response) => setName(response.data))
			.catch((error) => console.error("Error fetching random names: ", error));

		const nameInputElement = document.getElementById("charName");
		nameInputElement.value = name;
	}

	const changeGender = (event) => {
		setType(event.target.value);
	}

	return (
		<MainLayout title="Character Info">
			<div className="container-fluid vh-100 mt-4">
				<div className="row">
					<div className="col-sm-2">
						<input placeholder="Character Name" id="charName"/>
					</div>
					<div className="col-sm-1">
						<label>
							<input type="radio" name="gender" id="maleBtn" value="male"
								checked={type === "male"} onChange={changeGender} />
							Male
						</label>
					</div>
					<div className="col-sm-1">
						<label>
							<input type="radio" name="gender" id="femaleBtn" value="female"
								checked={type === "female"} onChange={changeGender} />
							Female
						</label>
					</div>
					<div className="col-sm-2">
						<button onClick={fetchName}>Generate Random Name</button>
					</div>
				</div>
				<Link to="/class">
					<button>Confirm</button>
				</Link>
			</div>
		</MainLayout>
	)
}

export default Info