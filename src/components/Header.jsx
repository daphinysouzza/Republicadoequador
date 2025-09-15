import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

/**
 * Componente de item de navegação
 */
const NavItem = ({ to, children, onClick, isActive }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`nav-link ${isActive ? 'active' : ''}`}
  >
    {children}
  </Link>
)



/**
 * Componente Header - Cabeçalho da aplicação
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Itens de navegação
  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/cursos', label: 'Curso' },
    { path: '/contato', label: 'Contato' }
  ]

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Detectar scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Alterna o estado do menu mobile
   */
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  /**
   * Fecha o menu mobile
   */
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="material-icons logo-icon">school</span>
            <h2>Escola República do Equador</h2>
          </Link>
          
          {/* Navegação */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                isActive={location.pathname === item.path}
              >
                {item.label}
              </NavItem>
            ))}
          </nav>

          {/* Botão do menu mobile */}
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header