import { useState } from "react"
import ButtonDarkMode from "../darkmode/ButtonDarkMode"
import Hamburger from "../icons/Hamburger"
import StoreIcon from "../icons/StoreIcon"
import UserIcons from "../icons/UserIcons"
import { estiloParaBordes } from "../utils/Estilos"

function Nav() {
  const [viewModal, setViewModal] = useState(false);

  const handleViewHamburger = () =>{
    setViewModal(!viewModal)
  }

  return (
    <header className='relative w-full z-50 lg:py-6'>
        <nav className="flex justify-between max-[1400px]:hidden">
            <h2 className="text-3xl w-1/3 font-bold font-titulo overflow-hidden px-2 py-2 text-center">FORNITURE</h2>
            <ul className="flex w-1/3 text-xl gap-2 justify-between items-center">
                <li className={estiloParaBordes}><a href="#inicio">Inicio</a></li>
                <li className={estiloParaBordes}><a href="#categorias">Categorias</a></li>
                <li className={estiloParaBordes}>Contáctanos</li>
            </ul>
            <div className="w-1/3 flex justify-evenly items-center">
              <UserIcons/>
              <StoreIcon/>
              <ButtonDarkMode/>
            </div>
        </nav>
        <div className="min-[1400px]:hidden max-lg:py-4 w-full flex justify-end pr-6 h-[40px]">
          {!viewModal && <button className="w-fit h-fit cursor-pointer" onClick={handleViewHamburger}><Hamburger/></button>}
        </div>
        {viewModal && <div className="min-[1400px]:hidden w-full absolute top-0 right-0 dark:bg-hamburguesa-dark/80 dark:text-hamburguesa text-end">
          <button className="w-fit h-fit cursor-pointer" onClick={handleViewHamburger}><Hamburger/></button>
          <ButtonDarkMode/>
          <div>INICIAR SESION</div>
          <div>INICIAR SESION</div>
          <div>INICIAR SESION</div>
        </div>}

    </header>
  )
}

export default Nav