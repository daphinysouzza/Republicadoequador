import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>Sobre Nossa Escola</h1>
          <p>Conheça a história e os valores da Escola República do Equador</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="text-content">
              <h2>Nossa História</h2>
              <p>Fundada em 13 de junho de 1988, a Escola República do Equador nasceu com o compromisso de oferecer educação pública de qualidade para a comunidade local. Ao longo de mais de três décadas, formamos muitos estudantes que hoje contribuem para o desenvolvimento da sociedade.</p>
              
              <h2>Missão</h2>
              <p>Proporcionar educação integral, gratuita e de qualidade, formando cidadãos críticos, éticos e preparados para os desafios do século XXI.</p>
              
              <h2>Visão</h2>
              <p>Ser referência em educação pública, reconhecida pela excelência no ensino e pela formação de cidadãos conscientes e transformadores da realidade social.</p>
            </div>
            
            <div className="values">
              <h2>Nossos Valores</h2>
              <div className="values-list">
                <div className="value-item">
                  <h3><span className="material-icons">star</span> Excelência</h3>
                  <p>Buscamos sempre a melhoria contínua em todos os processos educacionais</p>
                </div>
                <div className="value-item">
                  <h3><span className="material-icons">diversity_3</span> Inclusão</h3>
                  <p>Respeitamos e valorizamos a diversidade em todas as suas formas</p>
                </div>
                <div className="value-item">
                  <h3><span className="material-icons">lightbulb</span> Inovação</h3>
                  <p>Utilizamos metodologias modernas e tecnologia educacional</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About