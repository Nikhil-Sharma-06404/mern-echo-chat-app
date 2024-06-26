import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

// Wrap up the application in AuthContextProvider
export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null); // get user context from localstorage if he signed up

    return <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>
}