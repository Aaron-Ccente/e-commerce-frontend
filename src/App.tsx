import Nav from "./components/Nav";

function App() {
  return (
    <div className="min-h-screen bg-fondoPrincipal grid place-items-center">
      <div className="relative h-[calc(100vh-80px)] w-full">
        <div className="px-20 z-50">
          <div className="bg-fondoSecundario rounded-4xl h-[calc(100vh-80px)] ">
            <Nav />
            <div className="grid grid-rows-3 max-h-[calc(100vh-80px)] ">
              <h1 className="py-6 px-10 max-w-4/6 text-titulo text-8xl w-full font-titulo font-extrabold">
                Los mejores muebles para tu hogar
              </h1>
              <h2 className="text-4xl font-titulo max-w-1/2 w-[800px] px-10 font-normal flex items-center">Los mejores muebles en Perú, con materiales ecológicos y duraderos. Diseños únicos y gran variedad para decorar su hogar.</h2>
              <div className="text-4xl font-titulo max-w-1/2 px-10 flex justify-center">
                <button className="px-8 py-4 w-fit h-fit rounded-3xl bg-boton text-white">Ver productos</button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-80px)] w-full absolute bottom-0 right-0 grid grid-cols-2 pointer-events-none">
          <div></div>
          <div className="flex items-end">
            <div
              style={{
                backgroundImage: `url(/Imagenes/fondoPrincipal/fondoPrincipal.webp)`,
              }}
              className="bg-end bg-cover bg-no-repeat w-full h-full "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
