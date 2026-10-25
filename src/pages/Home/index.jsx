import { Footer } from '../../components/Footer'
import './styles.css'

export function Home() {
  return (
    <div className="home-container">
      <main className="home">
        <img
          src="/ilustracao-home.jpg"
          alt="Ilustração de viagem"
          className="home-ilustracao"
        />

        <h1 className="home-titulo">
          O seu próximo <span className="destaque">destino</span> pode estar
          aqui...
        </h1>

        <p className="home-subtitulo">
          Aqui você encontra uma seleção de <strong>pacotes completos</strong>{' '}
          para as suas férias!
        </p>

        <p className="home-texto">
          Na <strong>ConnectFlight</strong> você encontra pacotes de viagens
          nacionais e internacionais que incluem: passagens aéreas, hotéis,
          café da manhã, e até seguro viagem com{' '}
          <strong>preços arrasadores</strong>.
        </p>

        <p className="home-texto">
          Se você ainda não tem um destino definido, confira nossa seção de
          ofertas.
        </p>
      </main>

      <Footer />
    </div>
  )
}