import { Footer } from '../../components/Footer'
import { PageHeader } from '../../components/PageHeader'
import './styles.css'

const ofertas = [
  {
    id: 1,
    titulo: 'Pacote Paris Completo',
    descricao: 'Passagem + hotel 7 noites + café da manhã',
    precoAntigo: 'R$ 6.200',
    precoNovo: 'R$ 4.500',
    desconto: '27% OFF',
  },
  {
    id: 2,
    titulo: 'Tóquio Aventura',
    descricao: 'Passagem + hotel 10 noites + tour guiado',
    precoAntigo: 'R$ 8.500',
    precoNovo: 'R$ 6.800',
    desconto: '20% OFF',
  },
  {
    id: 3,
    titulo: 'Cancún All Inclusive',
    descricao: 'Passagem + resort 5 estrelas + todas as refeições',
    precoAntigo: 'R$ 6.900',
    precoNovo: 'R$ 4.800',
    desconto: '30% OFF',
  },
  {
    id: 4,
    titulo: 'Buenos Aires Express',
    descricao: 'Passagem + hotel 4 noites + city tour',
    precoAntigo: 'R$ 3.200',
    precoNovo: 'R$ 2.100',
    desconto: '34% OFF',
  },
]

export function Ofertas() {
  return (
    <div className="pagina-container">
      <main className="ofertas">
        <PageHeader
          titulo="Ofertas Imperdíveis"
          subtitulo="Pacotes com preços arrasadores por tempo limitado!"
        />

        <div className="ofertas-lista">
          {ofertas.map((oferta) => (
            <div className="oferta-card" key={oferta.id}>
              <div className="oferta-info">
                <h2 className="oferta-titulo">{oferta.titulo}</h2>
                <p className="oferta-descricao">{oferta.descricao}</p>
              </div>

              <div className="oferta-precos">
                <span className="badge-desconto">{oferta.desconto}</span>
                <p className="preco-antigo">{oferta.precoAntigo}</p>
                <p className="preco-novo">{oferta.precoNovo}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}