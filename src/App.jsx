import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Courses from './pages/cousers/Courses.jsx'
import Contact from './pages/contato/Contact.jsx'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App