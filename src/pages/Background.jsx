import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

const Background = () => {
    return (
        <MainLayout title="Background">
            <div className="container-fluid">
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
                            <th>
                                <label>
                                    <input type="radio" name="background" id="acolyteBtn" value="acolyte" />
                                    Acolyte
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="artisanBtn" value="artisan" />
                                    Artisan
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="charlatanBtn" value="charlatan" />
                                    Charlatan
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="criminalBtn" value="criminal" />
                                    Criminal
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="folkHeroBtn" value="folkHero" />
                                    Folk Hero
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="hermitBtn" value="hermit" />
                                    Hermit
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="outlanderBtn" value="outlander" />
                                    Outlander
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="soldierBtn" value="soldier" />
                                    Soldier
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    <input type="radio" name="background" id="urchinBtn" value="urchin" />
                                    Urchin
                                </label>
                            </th>
                            <th>Description</th>
                            <th>Mechanics</th>
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