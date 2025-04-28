import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";

//authorization token
const tokenData = JSON.parse(localStorage.getItem("token"));

const apiUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'http://ec2-35-93-20-121.us-west-2.compute.amazonaws.com';

//Retrieve number of characters in the database
const countCharacters = async () => {
    console.log("DEBUG: Token being sent: ", tokenData?.token);
    try {
        const response = await fetch(`${apiUrl}/api/character/count`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenData?.token}`
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

const handleDelete = async (number, setCharacters) => {
    const result = await deleteChar(number);
    if (result) {
        // after successful delete, remove character from state
        setCharacters(prev => prev.filter(c => c.number !== number));
    }
};

//retrieve character info by number from the database
const deleteChar = async (numberRequest) => {
    console.log("DEBUG: Deleting character #", numberRequest);
    try {
        const response = await fetch("http://localhost:8000/api/character/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenData?.token}`
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
        console.error("Error deleteing character : ", error);
    }
}

const getAllCharacters = async () => {
    try {
        const response = await fetch(`${apiUrl}/api/character/getall`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${tokenData?.token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("DEBUG: API Response:", data)

        // Ensure data.ids is an array
        if (!Array.isArray(data.ids)) {
            console.error("Expected an array of IDs, but received:", data.ids);
            return [];
        }

        const characterDetails = await Promise.all(data.ids.map(id => getCharByNumber(id)));
        return characterDetails;
    } catch (error) {
        console.error("Error fetching character IDs: ", error);
    }
};

//retrieve character info by number from the database
const getCharByNumber = async (numberRequest) => {
    console.log("DEBUG: Getting character #", numberRequest);
    try {
        const response = await fetch("http://localhost:8000/api/character/getbynum", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tokenData?.token}`
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

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacterData = async () => {

            const ids = await getAllCharacters();
            console.log(`Characters found: ${ids}`);
            setCharacters(ids || []);
        };
        fetchCharacterData();
    }, []);

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
                        {characters.map((character) => (
                            <tr key={character.number || character.name}>
                                <th className="col-1" scope="row">{character.name}</th>
                                <td className="col-1">{character.ancestry}</td>
                                <td className="col-1">{character.background}</td>
                                <td className="col-1">{character.charClass}</td>
                                <td className="col-1">1</td>
                                <td className="col-1">
                                    <Link to={`/CharacterSheet/${character.number}`}>
                                        <button>Select</button>
                                    </Link>
                                    <button onClick={() => handleDelete(character.number, setCharacters)}>Delete</button>
                                </td>
                            </tr>
                        ))}
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