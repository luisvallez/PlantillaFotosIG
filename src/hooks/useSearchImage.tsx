import { useState } from "react"

const useSearchImage = () => {
  const [imagen, setImagen] = useState<string | undefined>()

  const buscarImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0]
    if (!archivo) return
    const url = URL.createObjectURL(archivo)
    setImagen(url)
  }

  return {
    imagen,
    buscarImagen,
  }
}

export default useSearchImage
