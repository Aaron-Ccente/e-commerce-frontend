import Nav from "../Nav";

function Inicio() {

  return (
    <section id="inicio" className="relative h-auto min-h-screen max-md:py-6 w-full ">
      <div className="px-4 sm:px-10 md:px-20  relative">
        <div className="bg-fondoSecundario dark:bg-gradient-to-t dark:from-fondoSecundario-dark dark:via-fondoPrincipal-dark dark:to-fondoPrincipal-dark rounded-4xl dark:border-2 border-borde-dark  md:h-[calc(100vh-80px)] md:py-0">
          <Nav />

          <div className="grid grid-rows-[auto_auto_auto] gap-6 md:gap-0 md:grid-rows-3 max-h-[calc(100vh-80px)] max-sm:py-6">
            <h1 className="px-4 max-sm:px-8 sm:px-10 text-[clamp(2rem,6vw,5rem)] max-w-5xl font-titulo font-extrabold text-titulo">
              Los mejores muebles para tu hogar
            </h1>
            <h2 className="text-[clamp(1rem,3vw,2rem)] font-titulo max-w-3xl px-4 sm:px-10 font-normal flex items-center max-sm:px-8 z-40">
              Los mejores muebles en Perú, con materiales ecológicos y
              duraderos. Diseños únicos y gran variedad para decorar su hogar.
            </h2>
            <div className="flex flex-col items-center lg:w-4/5 gap-6">
              <button
                className="px-8 py-4 text-xl md:text-2xl rounded-3xl bg-boton text-white font-titulo cursor-pointer hover:scale-105 transition-transform"
              >
                <a 
                href="/productos"
                target="_blank"
                rel="noopener noreferrer">
                  Ver productos
                </a>
              </button>
              <div className="flex justify-end items-end w-full">
                <img
                  src="/Imagenes/fondoPrincipal/fondoPrincipal.webp"
                  alt="Muebles destacados"
                  width={500}
                  height={350}
                  className="block md:hidden w-full h-[350px] max-w-md rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen de fondo */}
      <div className="md:grid h-[calc(100vh-80px)] w-full absolute bottom-0 right-0 grid-cols-2 pointer-events-none">
        <div></div>
        <div className="flex items-end">
          <div
            style={{
              backgroundImage: `url(/Imagenes/fondoPrincipal/fondoPrincipal.webp)`,
            }}
            className="bg-end bg-cover bg-no-repeat w-full h-full"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
