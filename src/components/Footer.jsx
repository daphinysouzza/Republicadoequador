import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Escola República do Equador</h3>
            <p>Educação pública de qualidade para todos</p>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <p><span className="material-icons">location_on</span> Rua maria helena, 155</p>
            <p><span className="material-icons">phone</span> (11) 2658-8056</p>
            <p><span className="material-icons">email</span> E009830A@SEE.SP.GOV.BR</p>
          </div>
          
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="footer-social">
              <a href="https://wa.me/551126588056" target="_blank" rel="noopener noreferrer">
                <span className="material-icons">chat</span> WhatsApp
              </a>
              <a href="https://instagram.com/pei.equador" target="_blank" rel="noopener noreferrer">
                <span className="material-icons">camera_alt</span> Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Escola República do Equador. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer