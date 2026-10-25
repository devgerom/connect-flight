import { Link } from 'react-router-dom'
import './styles.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divisor" />

        <div className="footer-links">
          <Link to="/destinos">Destinos</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/contato">Contato</Link>

      </div>

      <img
        src="./onda-footer.png"
        alt="Onda decorativa"
        className="footer-wave"
      />

    </footer>
  )
}