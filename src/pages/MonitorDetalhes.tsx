import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import './MonitorDetalhes.css'

// Dados simulados para os gráficos
const dadosArboviroses = [
  { mes: 'Jan', dengue: 450, zika: 120, chikungunya: 80 },
  { mes: 'Fev', dengue: 520, zika: 140, chikungunya: 95 },
  { mes: 'Mar', dengue: 680, zika: 180, chikungunya: 110 },
  { mes: 'Abr', dengue: 890, zika: 220, chikungunya: 150 },
  { mes: 'Mai', dengue: 1100, zika: 280, chikungunya: 190 },
  { mes: 'Jun', dengue: 950, zika: 240, chikungunya: 160 },
  { mes: 'Jul', dengue: 780, zika: 200, chikungunya: 130 },
  { mes: 'Ago', dengue: 650, zika: 170, chikungunya: 105 },
  { mes: 'Set', dengue: 520, zika: 145, chikungunya: 88 },
  { mes: 'Out', dengue: 420, zika: 115, chikungunya: 72 },
]

const dadosVacinacao = [
  { faixa: '0-11', cobertura: 92 },
  { faixa: '12-17', cobertura: 88 },
  { faixa: '18-39', cobertura: 85 },
  { faixa: '40-59', cobertura: 90 },
  { faixa: '60+', cobertura: 95 },
]

const dadosLeitos = [
  { dia: 'Seg', ocupacao: 58 },
  { dia: 'Ter', ocupacao: 62 },
  { dia: 'Qua', ocupacao: 65 },
  { dia: 'Qui', ocupacao: 61 },
  { dia: 'Sex', ocupacao: 60 },
  { dia: 'Sab', ocupacao: 64 },
  { dia: 'Dom', ocupacao: 62 },
]

const dadosSindrome = [
  { semana: 'S1', casos: 2800 },
  { semana: 'S2', casos: 3100 },
  { semana: 'S3', casos: 3500 },
  { semana: 'S4', casos: 3800 },
  { semana: 'S5', casos: 3600 },
  { semana: 'S6', casos: 3200 },
  { semana: 'S7', casos: 2900 },
  { semana: 'S8', casos: 2600 },
]

const dadosDistribuicao = [
  { regiao: 'Zona Norte', casos: 450 },
  { regiao: 'Zona Sul', casos: 280 },
  { regiao: 'Zona Oeste', casos: 520 },
  { regiao: 'Centro', casos: 180 },
  { regiao: 'Subúrbio', casos: 340 },
]

const COLORS = ['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd']

interface MonitorData {
  titulo: string
  descricao: string
  icon: string
}

const monitoresConfig: { [key: string]: MonitorData } = {
  arboviroses: {
    titulo: 'Arboviroses',
    descricao: 'Monitoramento completo de dengue, zika e chikungunya',
    icon: '🦟'
  },
  vacinacao: {
    titulo: 'Cobertura Vacinal',
    descricao: 'Acompanhamento de cobertura vacinal por faixa etária',
    icon: '💉'
  },
  leitos: {
    titulo: 'Ocupação de Leitos',
    descricao: 'Monitoramento da ocupação de leitos de UTI',
    icon: '🏥'
  },
  sindrome: {
    titulo: 'Síndrome Gripal',
    descricao: 'Análise dos atendimentos de síndrome gripal',
    icon: '📊'
  }
}

function MonitorDetalhes() {
  const { tipo } = useParams<{ tipo: string }>()
  const config = tipo ? monitoresConfig[tipo] : monitoresConfig.arboviroses
  const [isDark, setIsDark] = useState(false)

  // Ensure theme stays consistent across routes and on reloads
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const shouldBeDark = saved === 'dark'
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [])

  return (
  <div className={`monitor-detalhes ${isDark ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="detalhes-header">
        <div className="header-content">
          <Link to="/" className="voltar-btn">← Voltar</Link>
          <div className="header-info">
            <span className="header-icon">{config.icon}</span>
            <div>
              <h1>{config.titulo}</h1>
              <p>{config.descricao}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Métricas Principais */}
      <section className="metricas-principais">
        <div className="metrica-card">
          <div className="metrica-label">Total de Casos</div>
          <div className="metrica-valor">1.234</div>
          <div className="metrica-variacao down">↓ 15%</div>
        </div>
        <div className="metrica-card">
          <div className="metrica-label">Média Diária</div>
          <div className="metrica-valor">176</div>
          <div className="metrica-variacao stable">→ Estável</div>
        </div>
        <div className="metrica-card">
          <div className="metrica-label">Pico Semanal</div>
          <div className="metrica-valor">289</div>
          <div className="metrica-variacao up">↑ 8%</div>
        </div>
        <div className="metrica-card">
          <div className="metrica-label">Taxa de Incidência</div>
          <div className="metrica-valor">18,5</div>
          <div className="metrica-variacao down">↓ 12%</div>
        </div>
      </section>

      {/* Gráficos */}
      <section className="graficos-section">
        {tipo === 'arboviroses' && (
          <>
            <div className="grafico-container">
              <h2>Evolução Temporal de Arboviroses</h2>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={dadosArboviroses}>
                  <defs>
                    <linearGradient id="colorDengue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorZika" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorChikungunya" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="dengue" stroke="#1e3a8a" fillOpacity={1} fill="url(#colorDengue)" />
                  <Area type="monotone" dataKey="zika" stroke="#2563eb" fillOpacity={1} fill="url(#colorZika)" />
                  <Area type="monotone" dataKey="chikungunya" stroke="#60a5fa" fillOpacity={1} fill="url(#colorChikungunya)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grafico-container">
              <h2>Distribuição por Região Administrativa</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dadosDistribuicao}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="regiao" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="casos" fill="#1e3a8a">
                    {dadosDistribuicao.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {tipo === 'vacinacao' && (
          <>
            <div className="grafico-container">
              <h2>Cobertura Vacinal por Faixa Etária</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={dadosVacinacao}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="faixa" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cobertura" fill="#1e3a8a">
                    {dadosVacinacao.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grafico-container">
              <h2>Distribuição de Cobertura</h2>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={dadosVacinacao}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ faixa, cobertura }) => `${faixa}: ${cobertura}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="cobertura"
                  >
                    {dadosVacinacao.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {tipo === 'leitos' && (
          <div className="grafico-container full-width">
            <h2>Ocupação de Leitos - Última Semana</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={dadosLeitos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ocupacao" stroke="#1e3a8a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {tipo === 'sindrome' && (
          <div className="grafico-container full-width">
            <h2>Atendimentos de Síndrome Gripal - Últimas 8 Semanas</h2>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={dadosSindrome}>
                <defs>
                  <linearGradient id="colorCasos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semana" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="casos" stroke="#2563eb" fillOpacity={1} fill="url(#colorCasos)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>

      {/* Tabela de Dados */}
      <section className="tabela-section">
        <h2>Dados Detalhados</h2>
        <div className="tabela-container">
          <table className="dados-tabela">
            <thead>
              <tr>
                <th>Período</th>
                <th>Casos Confirmados</th>
                <th>Taxa de Incidência</th>
                <th>Variação</th>
              </tr>
            </thead>
            <tbody>
              {dadosArboviroses.map((item, index) => (
                <tr key={index}>
                  <td>{item.mes}</td>
                  <td>{item.dengue + item.zika + item.chikungunya}</td>
                  <td>{((item.dengue + item.zika + item.chikungunya) / 67000 * 100000).toFixed(2)}</td>
                  <td className={index > 0 && item.dengue < dadosArboviroses[index-1].dengue ? 'down' : 'up'}>
                    {index > 0 ? `${((item.dengue - dadosArboviroses[index-1].dengue) / dadosArboviroses[index-1].dengue * 100).toFixed(1)}%` : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default MonitorDetalhes
