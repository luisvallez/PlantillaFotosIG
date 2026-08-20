import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import GeneradorDeFotos from "./GeneradorDeFotos"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GeneradorDeFotos />
  </StrictMode>,
)
