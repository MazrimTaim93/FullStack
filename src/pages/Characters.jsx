import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";

const deleteChar = () => {
    alert("Character deleted.")
}

//Retrieve number of characters in the database
const countCharacters = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/character/count", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filler: "Count please"
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }

        const data = await response.json();
        return data.charCount
    } catch (error) {
        console.error("Error counting characters: ", error);
    }
}

//retrieve character info by number from the database
const getCharByNumber = async (numberRequest) => {
    try {
        const response = await fetch("http://localhost:8000/api/character/getbynum", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                number: Number(numberRequest)
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        if (!data.success) {
            throw new Error("Character not found");
        }
        return data;
    } catch (error) {
        console.error("Error getting character by number: ", error);
    }
}

//create a table row for each character in the database
const GenerateCharacterTable = () => {
    const [CharElemArray, setCharElemArray] = useState([]);

    useEffect(() => { 
        const fetchCharacterData = async () => {
            const count = await countCharacters();

            const elements = [];
            for (var i = 0; i < count; i++) {
                const character = await getCharByNumber(i);

                elements.push(<tr key={i}>
                    <th className="col-1" scope="row">{character.name}</th>
                    <td className="col-1">{character.ancestry}</td>
                    <td className="col-1">{character.background}</td>
                    <td className="col-1">{character.charClass}</td>
                    <td className="col-1">1</td>
                    <td className="col-1">
                        <Link to={`/CharacterSheet/${i}`}>
                            <button>Select</button>
                        </Link>
                        <button onClick={deleteChar}>Delete</button>
                    </td>
                </tr>);
            }
            setCharElemArray(elements);
        };
        fetchCharacterData();
        
    }, [])
    return <>{CharElemArray}</>;
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
                        <GenerateCharacterTable/>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-sm-6">
                        <Link to="/info">
                            <button>Create New</button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Characters