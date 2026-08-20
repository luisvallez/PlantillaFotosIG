import { useRef } from "react"
import "./GeneradorDeFotos.css"
import useSearchImage from "./hooks/useSearchImage"
import html2canvas from "html2canvas"
const GeneradorDeFotos = () => {
  const seccionRef = useRef(null)
  const { imagen, buscarImagen } = useSearchImage()
  const convertirEnFoto = async () => {
    if (!seccionRef.current) return

    const canvas = await html2canvas(seccionRef.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: "#000000",
    })
    const urlImagen = canvas.toDataURL("image/png")

    const enlace = document.createElement("a")
    enlace.href = urlImagen
    enlace.download = "framed.png"
    enlace.click()
  }
  return (
    <>
      <h1>Generador de Fotos</h1>
      {seccionRef.current && (
        <button className="boton" onClick={convertirEnFoto}>
          Descargar Foto
        </button>
      )}
      <main className="main-section" ref={seccionRef}>
        <section className="central-section">
          <input onChange={buscarImagen} type="file" accept="image/*" />
          {imagen ?
            <div
              style={{
                backgroundImage: `url(${imagen})`,
              }}
            />
          : <button className="boton-central">click aquí para insertar una foto</button>}
        </section>
      </main>
    </>
  )
}

export default GeneradorDeFotos
