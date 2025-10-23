import { Link } from 'react-router-dom'
import './SobreDesenvolvedor.css'

export default function SobreDesenvolvedor() {
  return (
    <div className="sobre-dev">
      <header className="sobre-dev-header">
        <div className="sobre-dev-header-content">
          <Link to="/" className="sobre-dev-voltar" aria-label="Voltar para a página inicial">← Voltar</Link>
          <h1>Sobre o Desenvolvedor</h1>
          <p className="sobre-dev-sub">
            Conheça quem idealizou, projetou e desenvolveu esta base de observatório em saúde.
          </p>
        </div>
      </header>

      <main className="sobre-dev-main">
        <section className="dev-card">
          <div className="dev-avatar" aria-hidden>
            {/* Coloque sua foto em public/dev.jpg ou dev.png */}
            <img
              src="/dev.jpg"
              alt="Foto do desenvolvedor"
              className="dev-avatar-img"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <span className="dev-iniciais">DEV</span>
          </div>
          <div className="dev-info">
            <h2>Marco Antônio Brito Prado</h2>
            <p className="dev-role">Técnico em Mecatrônica • Graduando em Engenharia de Software • Desenvolvedor Full‑Stack • Engenharia Clínica (Hospitech)</p>
            <p className="dev-bio">
              Técnico em Mecatrônica e graduando em Engenharia de Software, atuo no desenvolvimento full‑stack
              de aplicações orientadas a dados, com foco em qualidade, segurança e eficiência. Tenho atuação em
              Engenharia Clínica na Hospitech, integrando tecnologia a processos operacionais, sem perder a
              versatilidade para entregar soluções em diferentes domínios. Estou conduzindo minha trajetória de
              programador de forma estruturada e consistente, valorizando boas práticas, arquitetura e
              visualização de dados em projetos reais.
            </p>
            <ul className="dev-highlights">
              <li>Desenvolvimento full‑stack (React, TypeScript, Node.js)</li>
              <li>Python para automação, análise de dados e integrações</li>
              <li>APIs, integrações e automações com bancos de dados</li>
              <li>Dashboards e visualização de dados para tomada de decisão</li>
              <li>Arquitetura, testes, performance e acessibilidade</li>
            </ul>
            <div className="dev-actions">
              <a className="dev-btn primary" href="tel:24999348783" aria-label="Ligar para o desenvolvedor">
                📞 Ligar: (24) 99934-8783
              </a>
              <a className="dev-btn" href="mailto:mp6171745@gmail.com" aria-label="Enviar e-mail para o desenvolvedor">
                ✉️ E-mail: mp6171745@gmail.com
              </a>
            </div>
          </div>
        </section>

        <section className="dev-techs">
          <h3>Tecnologias e Ferramentas</h3>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Vite</li>
            <li>Recharts</li>
            <li>CSS Moderno</li>
            <li>Acessibilidade</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
