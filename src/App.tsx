import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev
      if (next) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark')
      } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = saved ? saved === 'dark' : prefersDark
    setIsDarkMode(shouldBeDark)
    if (shouldBeDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [])

  return (
  <div className={`epirio-landing ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Cabeçalho */}
      <header className="epirio-header">
        <div className="epirio-logo-area">
          <span className="epirio-logo">Observatório de Saúde</span>
          <span className="epirio-subtitle">Observatório de Indicadores de Saúde</span>
        </div>
        <nav className="epirio-nav">
          <ul>
            <li><a href="#quem-somos">Quem Somos</a></li>
            <li><a href="#o-que-fazemos">O Que Fazemos</a></li>
            <li><a href="#resultados">Nossos Resultados</a></li>
            <li><a href="#monitor">Monitor de Cuidado</a></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      {/* Hero Section */}
      <section className="epirio-hero">
        <h1>Base de Observatório em Saúde</h1>
        <p>
          Monitoramento inteligente, análise de dados e transparência para apoiar decisões em saúde pública.
        </p>
        <div className="epirio-hero-actions">
          <a className="epirio-btn" href="#monitor">Acessar Monitor</a>
          <a className="epirio-btn" href="#resultados">Ver Resultados</a>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="epirio-about" id="quem-somos">
        <h2>Quem Somos</h2>
        <p>
          Este é um modelo genérico de observatório de saúde para ser usado como base em diferentes contextos. A proposta é reunir, analisar e apresentar indicadores de forma clara, transparente e acessível, servindo como ponto de partida para projetos institucionais.
        </p>
        <p style={{ marginTop: '1.5rem' }}>
          O conteúdo é totalmente adaptável: personalize textos, indicadores, fontes de dados e visualizações para a sua realidade. Use esta estrutura para comunicar resultados, produzir painéis interativos e apoiar a tomada de decisão.
        </p>
      </section>

      {/* O Que Fazemos */}
      <section className="epirio-destaques" id="o-que-fazemos">
        <h2>O Que Fazemos</h2>
        <div className="epirio-destaques-grid">
          <div className="epirio-card">
            <h3>📊 Análise de Dados</h3>
            <p>Processamento e análise de milhares de registros epidemiológicos diariamente para identificar tendências e padrões.</p>
            <a href="#" className="epirio-link"><span>Saiba mais</span></a>
          </div>
          <div className="epirio-card">
            <h3>📈 Monitoramento em Tempo Real</h3>
            <p>Acompanhamento contínuo dos principais indicadores de saúde com painéis interativos e atualizações diárias.</p>
            <a href="#monitor" className="epirio-link"><span>Acessar Monitor</span></a>
          </div>
          <div className="epirio-card">
            <h3>📋 Relatórios Técnicos</h3>
            <p>Produção de boletins epidemiológicos, notas técnicas e publicações científicas para apoio à gestão.</p>
            <a href="#" className="epirio-link"><span>Ver publicações</span></a>
          </div>
          <div className="epirio-card">
            <h3>🎯 Apoio à Decisão</h3>
            <p>Fornecimento de evidências científicas para subsidiar políticas públicas e ações estratégicas de saúde.</p>
            <a href="#" className="epirio-link"><span>Saiba mais</span></a>
          </div>
          <div className="epirio-card">
            <h3>🏥 Vigilância Epidemiológica</h3>
            <p>Detecção precoce de surtos e monitoramento de doenças de notificação compulsória no município.</p>
            <a href="#" className="epirio-link"><span>Saiba mais</span></a>
          </div>
          <div className="epirio-card">
            <h3>🌐 Transparência de Dados</h3>
            <p>Disponibilização aberta de dados e informações para a população, imprensa e comunidade científica.</p>
            <a href="#" className="epirio-link"><span>Acessar dados</span></a>
          </div>
        </div>
      </section>

      {/* Nossos Resultados */}
      <section className="epirio-publicacoes" id="resultados">
        <h2>Nossos Resultados</h2>
        <div className="resultados-grid">
          <div className="resultado-card">
            <div className="resultado-numero">250+</div>
            <div className="resultado-label">Boletins Epidemiológicos Publicados</div>
          </div>
          <div className="resultado-card">
            <div className="resultado-numero">1M+</div>
            <div className="resultado-label">Registros Processados Mensalmente</div>
          </div>
          <div className="resultado-card">
            <div className="resultado-numero">98%</div>
            <div className="resultado-label">Índice de Satisfação dos Usuários</div>
          </div>
          <div className="resultado-card">
            <div className="resultado-numero">50+</div>
            <div className="resultado-label">Indicadores Monitorados</div>
          </div>
        </div>
        <h3 className="resultados-subtitle">Destaques Recentes</h3>
        <ul className="highlights-list">
          <li><a href="#">Redução de 35% nos casos de arboviroses no último trimestre</a></li>
          <li><a href="#">Ampliação da cobertura vacinal em 12 pontos percentuais</a></li>
          <li><a href="#">Implementação de novo sistema de alertas epidemiológicos</a></li>
          <li><a href="#">Publicação de 15 artigos científicos em periódicos internacionais</a></li>
        </ul>
      </section>

      {/* Monitor de Cuidado */}
      <section className="epirio-monitor" id="monitor">
        <div className="container">
          <h2>Monitor de Cuidado</h2>
          <p className="monitor-descricao">
            Acompanhe indicadores de saúde em tempo real por meio de painéis interativos e personalizáveis.
          </p>
          
          <div className="monitor-grid">
            <div className="monitor-card">
              <div className="monitor-icon">🦟</div>
              <h3>Arboviroses</h3>
              <div className="monitor-valor">1.234</div>
              <div className="monitor-label">Casos confirmados (últimos 7 dias)</div>
              <div className="monitor-tendencia down">↓ 15% em relação à semana anterior</div>
              <Link to="/monitor/arboviroses" className="monitor-link">Ver detalhes →</Link>
            </div>
            
            <div className="monitor-card">
              <div className="monitor-icon">💉</div>
              <h3>Cobertura Vacinal</h3>
              <div className="monitor-valor">87,5%</div>
              <div className="monitor-label">Cobertura vacinal - esquema completo</div>
              <div className="monitor-tendencia up">↑ 2% no último mês</div>
              <Link to="/monitor/vacinacao" className="monitor-link">Ver detalhes →</Link>
            </div>
            
            <div className="monitor-card">
              <div className="monitor-icon">🏥</div>
              <h3>Ocupação de Leitos</h3>
              <div className="monitor-valor">62%</div>
              <div className="monitor-label">Leitos de UTI ocupados</div>
              <div className="monitor-tendencia stable">→ Estável</div>
              <Link to="/monitor/leitos" className="monitor-link">Ver detalhes →</Link>
            </div>
            
            <div className="monitor-card">
              <div className="monitor-icon">📊</div>
              <h3>Síndrome Gripal</h3>
              <div className="monitor-valor">3.567</div>
              <div className="monitor-label">Atendimentos (última semana)</div>
              <div className="monitor-tendencia down">↓ 8% em relação à semana anterior</div>
              <Link to="/monitor/sindrome" className="monitor-link">Ver detalhes →</Link>
            </div>
          </div>
          
          <div className="monitor-cta">
            <a className="epirio-btn" href="#">Acessar Todos os Painéis</a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="epirio-footer">
        <div>
          <a href="#">Instituição</a> | 
          <a href="#">Secretaria de Saúde</a> | 
          <a href="#">Vigilância em Saúde</a>
        </div>
        <div>
          <a href="#">Política de Privacidade</a> | 
          <a href="#">Aviso de Cookies</a>
        </div>
      </footer>

      {/* Floating About Developer Button */}
      <Link to="/sobre" className="fab-sobre" aria-label="Sobre o desenvolvedor">
        <span className="fab-emoji" aria-hidden>👨‍💻</span>
        <span className="fab-text">Sobre o Desenvolvedor</span>
      </Link>
    </div>
  )
}

export default App
