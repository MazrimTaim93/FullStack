import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


const changeHP = () => {
    alert("HP changed")
}

const attackRoll = () => {
    alert("Attack Rolled.")
}

const CharacterSheet = () => {
    let { id } = useParams();
    const characterID = parseInt(id, 10);
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch character data from the database
    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/character/getbynum", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ number: Number(characterID) })
                });

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                if (!data.success) {
                    throw new Error("Character not found");
                }
                setCharacter(data);
            } catch (error) {
                console.error("Error fetching character: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchCharacter();
    }, [characterID]);

    if (loading) {
        return <h1>Loading Character...</h1>;
    }

    if (!character) {
        return <h1>Character Not Found</h1>
    }
    
    return (
        <MainLayout title="Rusty">
            <div className="container-fluid" id="container">
                <div className="row" id="topRow">
                    <div className="col">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="row">Character Name</th>
                                    <th scope="row">Ancestry</th>
                                    <th scope="row">Background</th>
                                    <th scope="row">Class</th>
                                    <th scope="row">Level</th>
                                    <th scope="row">Experience</th>
                                    <th scope="row">Player Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{character.name}</th>
                                    <th>{character.charClass}</th>
                                    <th>{character.ancestry}</th>
                                    <th>{character.background}</th>
                                    <th>1</th>
                                    <th>0</th>
                                    <th>Jake</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> {/*top row*/}
                <div className="row" id="content-row">
                    <div className="col-sm-2" id="content-col-1">
                        <div className="row" id="proficiency-row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="row">Proficiency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Training Bonus</th>
                                        <th>+1</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Proficiency Bonus</th>
                                        <th>+3</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Expertise Bonus</th>
                                        <th>+5</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*proficiency row*/}
                        <div className="row" id="attributes-row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="row">Attributes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Might</th>
                                        <th>+3</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dexterity</th>
                                        <th>+1</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Intellect</th>
                                        <th>+2</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Charisma</th>
                                        <th>0</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*attributes row*/}
                        <div className="row" id="misc">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>
                                            Other Proficiencies
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Weapons</th>
                                        <th>Proficient with all weapons</th>
                                    </tr>
                                    <tr>
                                        <th>Armor</th>
                                        <th>Trained with all armors</th>
                                    </tr>
                                    <tr>
                                        <th>Other</th>
                                        <th>N/A</th>
                                    </tr>
                                    <tr>
                                        <th>Languages</th>
                                        <th>Speaks Common and Elvish</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*misc row*/}
                    </div> {/*content column 1*/}
                    <div className="col-sm-2 mx-1" id="skills-column">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="row">Skills</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Athletics</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Grappling</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Intimidation</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Acrobatics</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Lockpicking</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Sleight of Hand</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Stealth</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Arcana</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">History</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Investigation</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Medicine</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Nature</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Survival</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Animal Handling</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Deception</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Insight</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Performance</th>
                                    <th>x</th>
                                </tr>
                                <tr>
                                    <th scope="row">Persuasion</th>
                                    <th>x</th>
                                </tr>
                            </tbody>
                        </table>
                    </div> {/*skills column*/}
                    <div className="col-sm-2 mx-1" id="combat column">
                        <div className="row" id="hp row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Max HP</th>
                                        <th>Current HP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>15</th>
                                        <th>15</th>
                                    </tr>
                                    <tr>
                                        <button onClick={changeHP}>Change HP</button>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*hp row*/}
                        <div className="row" id="attack1 row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Attack Name</th>
                                        <th>Attack Bonus</th>
                                        <th>Damage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Mace</th>
                                        <th>+5</th>
                                        <th>2d6 + 2</th>
                                    </tr>
                                    <tr>
                                        <button onClick={attackRoll}>Attack Roll</button>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*attack1 row*/}
                        <div className="row" id="attack2 row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Attack Name</th>
                                        <th>Attack Bonus</th>
                                        <th>Damage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Shortbow</th>
                                        <th>+4</th>
                                        <th>2d6 + 1</th>
                                    </tr>
                                    <tr>
                                        <button onClick={attackRoll}>Attack Roll</button>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*attack2 row*/}
                        <div className="row" id="equipment row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>
                                            Equipment
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            Mace
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Light Shield
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Shortbow
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            Brigandine
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*equipment row*/}
                    </div> {/*combat column*/}
                    <div className="col-sm-2 mx-1" id="defenses column">
                        <div className="row" id="AC row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>AC</th>
                                        <th>Alt AC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>15</th>
                                        <th>16</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*AC row*/}
                        <div className="row" id="saves row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>
                                            Saves
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Fortitude</th>
                                        <th>+5</th>
                                    </tr>
                                    <tr>
                                        <th>Reflex</th>
                                        <th>+4</th>
                                    </tr>
                                    <tr>
                                        <th>Will</th>
                                        <th>+1</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*saves row*/}
                        <div className="row" id="resistances row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>
                                            Resistances
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Bludgeoning</th>
                                        <th>3</th>
                                    </tr>
                                    <tr>
                                        <th>Piercing</th>
                                        <th>3</th>
                                    </tr>
                                    <tr>
                                        <th>Slashing</th>
                                        <th>3</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*resistances row*/}
                        <div className="row" id="conditions row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>
                                            Conditions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>None</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*conditions row*/}
                    </div> {/*defenses column*/}
                </div> {/*content row*/}
            </div> {/*main div*/}
        </MainLayout>
    )
}

export default CharacterSheet