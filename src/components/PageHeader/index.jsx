import { Link } from 'react-router-dom'
import './styles.css'

export function PageHeader({ titulo, subtitulo }) {
  return (
    <div className="page-header">
      <Link to="/" className="link-voltar">
        ← Voltar para Home
      </Link>

      <h1 className="titulo-pagina">{titulo}</h1>

      {subtitulo && <p className="subtitulo-pagina">{subtitulo}</p>}
    </div>
  )
}