import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const Characters = () => {
    return (
        <MainLayout title="My Characters">
            <div className="container-fluid">
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
                            <th scope="row">Rusty</th>
                            <td>Human</td>
                            <td>Soldier</td>
                            <td>Fighter</td>
                            <td>1</td>
                            <td>
                                <Link to="/Rusty">
                                    <button>Select</button>
                                </Link>
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