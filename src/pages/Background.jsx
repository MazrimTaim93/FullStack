import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const Background = () => {
    return (
        <MainLayout title="Background">
            <div className="container-fluid vh-100 mt-4">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>
                                <h1>Background</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-1">
                                <label>
                                    <input type="radio" name="background" id="acolyteBtn" value="acolyte" />
                                    Acolyte
                                </label>
                            </td>
                            <td className="col-8">Description</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="artisanBtn" value="artisan" />
                                    Artisan
                                </label>
                            </td>
                            <td>Description</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="charlatanBtn" value="charlatan" />
                                    Charlatan
                                </label>
                            </td>
                            <td>Description</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="criminalBtn" value="criminal" />
                                    Criminal
                                </label>
                            </td>
                            <td>Description</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="folkHeroBtn" value="folkHero" />
                                    Folk Hero
                                </label>
                            </td>
                            <td>Description</td>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="hermitBtn" value="hermit" />
                                    Hermit
                                </label>
                            </td>
                            <td>Description</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="outlanderBtn" value="outlander" />
                                    Outlander
                                </label>
                            </td>
                            <td>Description</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="soldierBtn" value="soldier" />
                                    Soldier
                                </label>
                            </td>
                            <td>Description</td>
                            <td>Mechanics</td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="background" id="urchinBtn" value="urchin" />
                                    Urchin
                                </label>
                            </td>
                            <td>Description</td>
                            <td>Mechanics</td>
                        </tr> 
                    </tbody>
                </table>
                
                <div className="row">
                    <div className="col-sm-6">
                        <Link to="/characters">
                            <button>Confirm</button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Background