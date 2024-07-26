import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/auth"

export function TemplatePrivateRoute() {
    const {user} = useAuth()

    return user ? (
        <div>
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                <div className="container max-auto">
                    <a className="navbar-brand" href="#">LAB365 - DASHBOARD</a>
                </div>
            </nav>

            <main className="container mx-auto">
                <Outlet/>          
            </main>
        </div>
    ) : <Navigate to='/'/>
}