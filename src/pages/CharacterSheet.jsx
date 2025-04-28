import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

//authorization token
const tokenData = JSON.parse(localStorage.getItem("token"));

const apiUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'http://ec2-35-93-20-121.us-west-2.compute.amazonaws.com';


const changeHP = () => {
    alert("HP changed")
}

const CharacterSheet = () => {
    let { id } = useParams();
    const characterID = parseInt(id, 10);
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch character data from the database
    useEffect(() => {
        const fetchCharacter = async () => {
            console.log("DEBUG: Token being sent: ", tokenData?.token);
            try {
                const response = await fetch(`${apiUrl}/api/character/getbynum`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${tokenData?.token}`
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
        <MainLayout title={character.name}>
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
                                    <td scope="row">{character.name}</td>
                                    <td>{character.charClass}</td>
                                    <td>{character.ancestry}</td>
                                    <td>{character.background}</td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>Jake</td>
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
                                        <td />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Training Bonus</th>
                                        <td>+1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Expertise Bonus</th>
                                        <td>+3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mastery Bonus</th>
                                        <td>+5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> {/*proficiency row*/}
                        <div className="row" id="attributes-row">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="row">Attributes</th>
                                        <td />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Might</th>
                                        <td>+{character.might}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dexterity</th>
                                        <td>+{character.dexterity}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Intellect</th>
                                        <td>+{character.intellect}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Charisma</th>
                                        <td>+{character.charisma}</td>
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
                                        <td />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Weapons</th>
                                        <td>{character.className == "Fighter" ? (
                                            "Expert with all weapons") : (
                                            "Expert with simple weapons")}</td>
                                    </tr>
                                    <tr>
                                        <th>Armor</th>
                                        <td>
                                            {character.charClass === "Fighter" ? (
                                                "Trained with all armors"
                                            ) : character.charClass === "Rogue" ? (
                                                "Trained in unarmored and light armor"
                                            ) : character.charClass === "Cleric" ? (
                                                "Trained in unarmored, light and medium armor"
                                            ) : character.charClass === "Wizard" ? (
                                                "Trained in unarmored"
                                            ) : null}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Other</th>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <th>Languages</th>
                                        <td>
                                            {character.ancestry == "Elf" ? ("Speaks Common and Elvish") :
                                        character.ancestry == "Dwarf" ? ("Speaks Common and Dwarvish") :
                                            ("Speaks Common")}
                                        </td>
                                        
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
                                    <td />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Athletics</th>
                                    <td>+{character.charClass == "Fighter" ? (character.might + 3) : character.might}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Grappling</th>
                                    <td>+{character.charClass == "Fighter" ? (character.might + 3) : character.might}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Intimidation</th>
                                    <td>+{character.charClass == "Fighter" ? (character.might + 3) : character.might}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Acrobatics</th>
                                    <td>+{character.charClass == "Fighter" ? (character.dexterity + 3) :
                                        character.charClass == "Rogue" ? (character.dexterity + 5) :
                                        character.dexterity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Lockpicking</th>
                                    <td>+{character.charClass == "Rogue" ? (character.dexterity + 5) : character.dexterity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sleight of Hand</th>
                                    <td>+{character.charClass == "Rogue" ? (character.dexterity + 5) : character.dexterity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Stealth</th>
                                    <td>+{character.charClass == "Rogue" ? (character.dexterity + 5) : character.dexterity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Arcana</th>
                                    <td>+{character.charClass == "Wizard" ? (character.intellect + 5) : character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">History</th>
                                    <td>+{character.charClass == "Wizard" ? (character.intellect + 3) : character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Investigation</th>
                                    <td>+{character.charClass == "Wizard" ? (character.intellect + 3) : character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Medicine</th>
                                    <td>+{character.charClass == "Cleric" ? (character.intellect + 3) : character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Nature</th>
                                    <td>+{character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Religion</th>
                                    <td>+{character.charClass == "Fighter" ? (character.intellect + 3) : character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Religion</th>
                                    <td>+{character.charClass == "Cleric" ? (character.intellect + 5) : character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Survival</th>
                                    <td>+{character.intellect}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Animal Handling</th>
                                    <td>+{character.charisma}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Deception</th>
                                    <td>+{character.charClass == "Rogue" ? (character.charisma + 5) : character.charisma}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Insight</th>
                                    <td>+{character.charClass == "Cleric" || character.charClass == "Wizard" ? (character.charisma + 3) : character.charisma}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Performance</th>
                                    <td>+{character.charisma}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Persuasion</th>
                                    <td>+{character.charClass == "Cleric" ? (character.charisma + 3) : character.charisma}</td>
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
                                        <td>15</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td />
                                        <td>
                                            <button onClick={changeHP}>Change HP</button>
                                        </td>
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
                                        <td>Mace</td>
                                        <td>+5</td>
                                        <td>2d6 + 2</td>
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
                                        <td>Shortbow</td>
                                        <td>+4</td>
                                        <td>2d6 + 1</td>
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
                                        <td>Mace</td>
                                    </tr>
                                    <tr>
                                        <td>Light Shield</td>
                                    </tr>
                                    <tr>
                                        <td>Shortbow</td>
                                    </tr>
                                    <tr>
                                        <td>Brigandine</td>
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
                                        <td>15</td>
                                        <td>16</td>
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
                                        <td>+{ character.fortitude}</td>
                                    </tr>
                                    <tr>
                                        <th>Reflex</th>
                                        <td>+{character.reflex}</td>
                                    </tr>
                                    <tr>
                                        <th>Will</th>
                                        <td>+{character.will}</td>
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
                                        <td>None</td>
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
                                        <td>None</td>
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