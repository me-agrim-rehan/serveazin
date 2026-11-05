
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import About from './pages/About'
import Contact from './pages/contact'

import Cybersecurity from './pages/Cybersecurity'
import DigitalMarketing from './pages/DigitalMarketing'
import SoftwareSaaS from './pages/SoftwareSaas'
import ITInfrastructure from './pages/ITInfrastructure.'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/services/cybersecurity"
          element={<Cybersecurity />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/software-saas"
          element={<SoftwareSaaS />}
        />
        <Route
          path="/services/it-infrastructure"
          element={<ITInfrastructure />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
