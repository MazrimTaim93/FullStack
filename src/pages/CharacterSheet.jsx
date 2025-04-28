import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const changeHP = () => {
    alert("HP changed")
}

//authorization token
const tokenData = JSON.parse(localStorage.getItem("token"));

const apiUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'http://ec2-35-93-20-121.us-west-2.compute.amazonaws.com';

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
                                        <th scope="row">Expertise Bonus</th>
                                        <th>+3</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mastery Bonus</th>
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
                                        <th>+{character.might}</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dexterity</th>
                                        <th>+{character.dexterity}</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Intellect</th>
                                        <th>+{character.intellect}</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Charisma</th>
                                        <th>+{character.charisma}</th>
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
                                        <tr>
                                            {character.className == "Fighter" ? (
                                                <td>Expert with all weapons</td>) : (
                                                <td>Expert with simple weapons</td>)}
                                        </tr>
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
                                        {character.ancestry == "Elf" ? (
                                            <tr>Speaks Common and Elvish</tr>) :
                                        character.ancestry == "Dwarf" ? (
                                                <tr>Speaks Common and Dwarvish</tr>) :
                                            (<tr>Speaks Common</tr>)}
                                        
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
                                    <th>+{character.charClass == "Fighter" ? (character.might + 3) : character.might}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Grappling</th>
                                    <th>+{character.charClass == "Fighter" ? (character.might + 3) : character.might}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Intimidation</th>
                                    <th>+{character.charClass == "Fighter" ? (character.might + 3) : character.might}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Acrobatics</th>
                                    <th>+{character.charClass == "Fighter" ? (character.dexterity + 3) :
                                        character.charClass == "Rogue" ? (character.dexterity + 5) :
                                        character.dexterity}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Lockpicking</th>
                                    <th>+{character.charClass == "Rogue" ? (character.dexterity + 5) : character.dexterity}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Sleight of Hand</th>
                                    <th>+{character.charClass == "Rogue" ? (character.dexterity + 5) : character.dexterity}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Stealth</th>
                                    <th>+{character.charClass == "Rogue" ? (character.dexterity + 5) : character.dexterity}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Arcana</th>
                                    <th>+{character.charClass == "Wizard" ? (character.intellect + 5) : character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">History</th>
                                    <th>+{character.charClass == "Wizard" ? (character.intellect + 3) : character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Investigation</th>
                                    <th>+{character.charClass == "Wizard" ? (character.intellect + 3) : character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Medicine</th>
                                    <th>+{character.charClass == "Cleric" ? (character.intellect + 3) : character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Nature</th>
                                    <th>+{character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Religion</th>
                                    <th>+{character.charClass == "Fighter" ? (character.intellect + 3) : character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Religion</th>
                                    <th>+{character.charClass == "Cleric" ? (character.intellect + 5) : character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Survival</th>
                                    <th>+{character.intellect}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Animal Handling</th>
                                    <th>+{character.charisma}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Deception</th>
                                    <th>+{character.charClass == "Rogue" ? (character.charisma + 5) : character.charisma}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Insight</th>
                                    <th>+{character.charClass == "Cleric" || character.charClass == "Wizard" ? (character.charisma + 3) : character.charisma}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Performance</th>
                                    <th>+{character.charisma}</th>
                                </tr>
                                <tr>
                                    <th scope="row">Persuasion</th>
                                    <th>+{character.charClass == "Cleric" ? (character.charisma + 3) : character.charisma}</th>
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
                                        <th>Mace</th>
                                        <th>+5</th>
                                        <th>2d6 + 2</th>
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