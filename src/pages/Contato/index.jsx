import { useState } from 'react'
import { Footer } from '../../components/Footer'
import { PageHeader } from '../../components/PageHeader'
import './styles.css'

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
    setNome('')
    setEmail('')
    setMensagem('')

    setTimeout(() => setEnviado(false), 4000)
  }

  return (
    <div className="pagina-container">
      <main className="contato">
        <PageHeader
          titulo="Fale Conosco"
          subtitulo="Tem alguma dúvida? Nossa equipe está pronta para ajudar!"
        />

        {enviado && (
          <div className="mensagem-sucesso">
            ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}

        <form className="contato-form" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows="5"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Como podemos ajudar?"
              required
            />
          </div>

          <button type="submit" className="botao-enviar">
            Enviar Mensagem
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}