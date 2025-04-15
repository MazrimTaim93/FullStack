import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        let storedToken = localStorage.getItem("token");
        if (storedToken) {
            storedToken = JSON.parse(storedToken);
            if (storedToken.expiration < Date.now()) {
                logout();
            } else {
                setIsLoggedIn(true);
                setToken(storedToken);
            }
        }
    }, []);


    const login = async (username, password) => {
        const apiUrl = window.location.hostname === 'localhost'
            ? 'http://localhost:8000'
            : 'http://ec2-35-93-20-121.us-west-2.compute.amazonaws.com';

        const response = await fetch(`${apiUrl}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error("Invalid Credentials");
        }

        const data = await response.json();
        const token = data.token;

        // Optional: decode the token to extract expiration info
        const payload = JSON.parse(atob(token.split(".")[1]));
        const expiration = payload.exp * 1000; // JWT exp is in seconds, JS Date uses ms

        const storedToken = {
            token,
            expiration,
        };

        localStorage.setItem("token", JSON.stringify(storedToken));
        setToken(storedToken);
        setIsLoggedIn(true);
        return true;
    };


    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setIsLoggedIn(false);
        return (true);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}