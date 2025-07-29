import Inicio from '../components/sections/Inicio'

function Home() {
  return (
    <div className="min-h-screen bg-fondoPrincipal dark:bg-fondoPrincipal-dark dark:text-texto-dark grid place-items-center">
      <Inicio/>
    </div>
  )
}

export default Home