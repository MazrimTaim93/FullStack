import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const Class = () => {
    return (
        <MainLayout title="New Character">
            <div className="container-fluid">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="class" id="clericBtn" value="cleric" />
                                    Cleric
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="class" id="fighterBtn" value="fighter" />
                                    Fighter
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="class" id="rogueBtn" value="rogue" />
                                    Rogue
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="class" id="wizardBtn" value="wizard" />
                                    Wizard
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-sm-6">
                        <Link to="/ancestry">
                            <button>Confirm</button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Class