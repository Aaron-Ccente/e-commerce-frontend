import Categories from '../components/sections/Categories'
import Inicio from '../components/sections/Inicio'

function Home() {
  return (
    <div className="min-h-screen bg-fondoPrincipal dark:bg-fondoPrincipal-dark dark:text-texto-dark grid place-items-center py-4">
      <Inicio/>
      <Categories/>
    </div>
  )
}

export default Home