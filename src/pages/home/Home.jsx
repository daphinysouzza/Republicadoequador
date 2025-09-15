import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'

/**
 * Componente de card de feature
 */
const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card carousel-item">
    <div className="feature-icon">
      <span className="material-icons">{icon}</span>
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)







/**
 * Página inicial da escola
 */
const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Dados estáticos da escola
  const features = [
    {
      id: 1,
      icon: 'school',
      title: 'Ensino de Qualidade',
      description: 'Metodologia moderna e professores qualificados'
    },
    {
      id: 2,
      icon: 'business',
      title: 'Infraestrutura Completa',
      description: 'Laboratórios, biblioteca e espaços esportivos'
    },
    {
      id: 3,
      icon: 'groups',
      title: 'Inclusão Social',
      description: 'Educação gratuita e acessível para todos'
    }
  ]



  // Efeito para animação de entrada
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`home ${isVisible ? 'fade-in' : ''}`}>
      {/* Seção Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Escola República do Equador</h1>
            <p>
              Formando cidadãos conscientes e preparados para o futuro 
              através de uma educação pública de excelência
            </p>
            <div className="hero-buttons">
              <Link to="/sobre" className="btn btn-primary">
                Conheça Nossa História
              </Link>
              <Link to="/cursos" className="btn btn-outline">
                Ver Curso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Features */}
      <section className="features">
        <div className="container">
          <h2>Por que escolher nossa escola?</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home