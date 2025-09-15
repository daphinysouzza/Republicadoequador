import './Contact.css'

const Contact = () => {

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para ajudar você</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-info-center">
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              
              <div className="info-item">
                <h3><span className="material-icons">location_on</span> Endereço</h3>
                <p>Rua maria helena, 155<br />Bairro Engenho Novo<br />São Paulo - SP<br />CEP: 06415-100</p>
              </div>
              
              <div className="info-item">
                <h3><span className="material-icons">phone</span> Telefone</h3>
                <p>Secretaria: (11) 2658-8056<br /></p>
              </div>
              
              <div className="info-item">
                <h3><span className="material-icons">email</span> E-mail</h3>
                <p>E009830A@SEE.SP.GOV.BR</p>
              </div>
              
              <div className="info-item">
                <h3><span className="material-icons">schedule</span> Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 8h às 17h<br />Ensino Integral - 9 horas diárias</p>
              </div>
              
              <div className="info-item">
                <h3><span className="material-icons">map</span> Localização</h3>
                <a href="https://maps.app.goo.gl/FowTmTGXb8h2qGnu9" target="_blank" rel="noopener noreferrer" className="map-link">
                  Ver no Google Maps
                </a>
              </div>
              
              <div className="info-item">
                <h3><span className="material-icons">share</span> Redes Sociais</h3>
                <div className="social-links">
                  <a href="https://wa.me/551126588056" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                    <span className="material-icons">chat</span> WhatsApp
                  </a>
                  <a href="https://instagram.com/pei.equador" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                    <span className="material-icons">camera_alt</span> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact