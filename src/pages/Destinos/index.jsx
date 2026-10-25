import { Footer } from '../../components/Footer'
import { PageHeader } from '../../components/PageHeader'
import './styles.css'

const destinos = [
  { id: 1, nome: 'Paris', pais: 'França', preco: 'R$ 4.500', imagem: '/destinos/paris.webp' },
  { id: 2, nome: 'Tóquio', pais: 'Japão', preco: 'R$ 6.800', imagem: '/destinos/toquio.webp' },
  { id: 3, nome: 'Nova York', pais: 'EUA', preco: 'R$ 5.200', imagem: '/destinos/nova-york.webp' },
  { id: 4, nome: 'Lisboa', pais: 'Portugal', preco: 'R$ 3.900', imagem: '/destinos/lisboa.webp' },
  { id: 5, nome: 'Buenos Aires', pais: 'Argentina', preco: 'R$ 2.100', imagem: '/destinos/buenos-aires.webp' },
  { id: 6, nome: 'Cancún', pais: 'México', preco: 'R$ 4.800', imagem: '/destinos/cancun.webp' },
]

export function Destinos() {
  return (
    <div className="pagina-container">
      <main className="destinos">
        <PageHeader
          titulo="Nossos Destinos"
          subtitulo="Descubra lugares incríveis para sua próxima viagem"
        />

        <div className="cards-grid">
          {destinos.map((destino) => (
            <div className="card" key={destino.id}>
              <img
                src={destino.imagem}
                alt={`Foto de ${destino.nome}`}
                className="card-imagem"
              />
              <div className="card-conteudo">
                <h2 className="card-titulo">{destino.nome}</h2>
                <p className="card-pais">{destino.pais}</p>
                <p className="card-preco">A partir de {destino.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}