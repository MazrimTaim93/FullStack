import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const Ancestry = () => {
    return (
        <MainLayout title="Ancestry">
            <div className="container-fluid">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>
                                <h1>Ancestry</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="ancestry" id="dwarfBtn" value="dwarf"/>
                                    Dwarf
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="ancestry" id="elfBtn" value="elf" />
                                    Elf
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="ancestry" id="halflingBtn" value="halfling" />
                                    Halfling
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="ancestry" id="humanBtn" value="human" />
                                    Human
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-sm-6">
                        <Link to="/background">
                            <button>Confirm</button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Ancestry