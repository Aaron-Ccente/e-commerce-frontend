import ButtonDarkMode from "../darkmode/ButtonDarkMode"
import StoreIcon from "../icons/StoreIcon"
import UserIcons from "../icons/UserIcons"

function Nav() {
  return (
    <header className='w-full z-50 py-6'>
        <nav className="flex justify-between">
            <h2 className="text-4xl w-1/3 font-bold font-titulo overflow-hidden px-2 py-2 text-center">FORNITURE</h2>
            <ul className="flex w-1/3 text-3xl gap-2 justify-between items-center">
                <li>Inicio</li>
                <li>Categorias</li>
                <li>Contáctanos</li>
            </ul>
            <div className="w-1/3 flex justify-evenly items-center">
              <UserIcons/>
              <StoreIcon/>
              <ButtonDarkMode/>
            </div>
        </nav>
    </header>
  )
}

export default Nav