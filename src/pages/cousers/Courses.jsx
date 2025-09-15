import { useState } from 'react'
import './Courses.css'

const Courses = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const courseInfo = {
    title: "Ensino Médio Integral",
    description: "Sistema PEI - Programa de Ensino Integral com 9 horas diárias",
    features: ["Formação Integral", "Projeto de Vida", "Protagonismo Juvenil", "Tutoria"]
  }

  const platforms = [
    {
      title: "Sala do Futuro",
      description: "Ambiente tecnológico para aprendizagem inovadora",
      icon: "computer",
      details: {
        content: "A Sala do Futuro é um laboratório de informática moderno que oferece aos estudantes acesso à tecnologia para desenvolvimento de habilidades digitais e pesquisas acadêmicas.",
        features: ["Computadores e notebooks", "Acesso à internet", "Softwares educacionais"]
      }
    },
    {
      title: "SEDUC",
      description: "Plataforma da Secretaria de Educação do Estado",
      icon: "school",
      details: {
        content: "A SEDUC (Secretaria da Educação do Estado de São Paulo) oferece uma plataforma digital completa que conecta estudantes, professores e famílias, facilitando o acesso a conteúdos educacionais e serviços escolares.",
        features: ["Acesso ao histórico escolar", "Material didático digital", "Comunicação escola-família", "Atividades complementares", "Acompanhamento pedagógico"]
      }
    },
    {
      title: "Provas Paulista",
      description: "Avaliação estadual para monitoramento da aprendizagem",
      icon: "quiz",
      details: {
        content: "As Provas Paulista são avaliações externas aplicadas pela Secretaria da Educação para monitorar a qualidade do ensino e identificar áreas que necessitam de melhoria no processo educacional.",
        features: ["Avaliação de Língua Portuguesa", "Avaliação de Matemática", "Diagnóstico de aprendizagem", "Relatórios individuais", "Planejamento pedagógico"]
      }
    },
    {
      title: "Provão Paulista",
      description: "Avaliação externa para estudantes do 3º ano",
      icon: "assignment",
      details: {
        content: "O Provão Paulista é uma avaliação que oferece aos estudantes do 3º ano do Ensino Médio a oportunidade de ingressar em universidades públicas paulistas sem a necessidade de prestar ENEM ou outros vestibulares.",
        features: ["Acesso direto a universidades públicas", "Avaliação multidisciplinar", "Vagas exclusivas para rede estadual", "Certificado de conclusão"]
      }
    },
    {
      title: "Itinerários Formativos",
      description: "Trilhas de aprofundamento por área de conhecimento",
      icon: "explore",
      details: {
        content: "Os Itinerários Formativos são conjuntos de disciplinas, projetos, oficinas e núcleos de estudo que permitem ao estudante aprofundar seus conhecimentos em uma ou mais áreas de seu interesse, preparando-o para o prosseguimento dos estudos ou para o mundo do trabalho.",
        features: ["Linguagens e suas Tecnologias", "Matemática e suas Tecnologias", "Ciências da Natureza e suas Tecnologias", "Ciências Humanas e Sociais Aplicadas", "Formação Técnica e Profissional"]
      }
    }
  ]

  return (
    <div className="courses">
      <section className="courses-hero">
        <div className="container">
          <h1>Nosso Curso</h1>
          <p>Ensino Médio Integral - Sistema PEI</p>
        </div>
      </section>

      <section className="courses-content">
        <div className="container">
          <div className="course-info">
            <div className="course-card main-course">
              <h3>{courseInfo.title}</h3>
              <p>{courseInfo.description}</p>
              <ul>
                {courseInfo.features.map((feature, idx) => (
                  <li key={idx}><span className="material-icons">check</span> {feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="platforms">
            <h2>Plataformas e Avaliações</h2>
            <div className="platforms-grid">
              {platforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="platform-card"
                  onClick={() => setSelectedPlatform(platform)}
                >
                  <span className="material-icons">{platform.icon}</span>
                  <h3>{platform.title}</h3>
                  <p>{platform.description}</p>

                </div>
              ))}
            </div>

            {selectedPlatform && (
              <div className="modal-overlay" onClick={() => setSelectedPlatform(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <span className="material-icons modal-icon">{selectedPlatform.icon}</span>
                    <h2>{selectedPlatform.title}</h2>
                    <button 
                      className="modal-close"
                      onClick={() => setSelectedPlatform(null)}
                    >
                      <span className="material-icons">close</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>{selectedPlatform.details.content}</p>
                    <h3>Principais Recursos:</h3>
                    <ul>
                      {selectedPlatform.details.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="material-icons">check_circle</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses