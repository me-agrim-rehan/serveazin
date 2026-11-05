
import MainLayout from '../components/MainLayout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Products />
    </MainLayout>
  )
}

export default Home
