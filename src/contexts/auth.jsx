import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: () => {},
    signOut: () => {}
})

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null)

    function signIn(data) {
        if(data.email !== "fulano@teste.com.br" || data.password !== "123") {
            throw new Error("Email/Senha invalida")
        }

        setUser({
            id: Date.now(),
            first_name: "Fulano de Tal",
            email: data.email
        })
    }

    function signOut() {
        setUser(null)
    }

    return <AuthContext.Provider value={{user, signIn, signOut}} >{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}