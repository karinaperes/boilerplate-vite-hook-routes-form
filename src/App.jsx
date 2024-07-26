import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { AuthProvider } from "./contexts/auth"

export function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>      
    </>
  )
}

export default App
