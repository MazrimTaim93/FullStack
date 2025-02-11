import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const deleteChar = () => {
    alert("Character deleted.")
}

const Characters = () => {
    return (
        <MainLayout title="My Characters">
            <div className="container-fluid vh-100 mt-4">
                <div className="row">
                    <div className="col">
                        <h1>My Characters</h1>
                    </div>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Ancestry</th>
                            <th scope="col">Background</th>
                            <th scope="col">Class</th>
                            <th scope="col">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="col-1" scope="row">Rusty</th>
                            <td className="col-1">Human</td>
                            <td className="col-1">Soldier</td>
                            <td className="col-1">Fighter</td>
                            <td className="col-1">1</td>
                            <td className="col-1">
                                <Link to="/Rusty">
                                    <button>Select</button>
                                </Link>
                                <button onClick={deleteChar }>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-sm-6">
                        <Link to="/class">
                            <button>Create New</button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Characters