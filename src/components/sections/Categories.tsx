import React from 'react'

function Categories() {

    const categorias = [
        {"name":"Sala", "descripton": "Imagen de sala - ecommerce Furniture"}, 
        {"name":"Comedor", "descripton": "Imagen de un comedor - ecommerce Furniture"}, 
        {"name":"Dormitorio", "descripton": "Imagen de dormitorio - ecommerce Furniture"}, 
        {"name":"Oficina y Estudio", "descripton": "Imagen de estudio y oficina - ecommerce Furniture"}, 
        {"name":"Infantil y Juvenil", "descripton": "Imagen de muebles infantiles y juveniles - ecommerce Furniture"}, 
        {"name":"Exterior", "descripton": "Imagenes de muebles para exterior - ecommerce Furniture"}, 
        {"name":"Almacenamiento", "descripton": "Imagenes de muebles de almacenamiento - ecommerce Furniture"}, 
        {"name":"Decoración y Complementos", "descripton": "Imagenes de muebles de decoracion y complementos - ecommerce Furniture"}, 
        {"name":"Estilo", "descripton": "Imagenes de muebles modernos con estilo - ecommerce Furniture"}, 
    ];


  return (
    <section id='categorias' className='min-h-screen dark:bg-fondoPrincipal-dark w-full px-4 sm:px-10 md:px-20'>
        <div className='bg-fondoSecundario dark:bg-fondoSecundario-dark rounded-3xl'>
        <div className='text-center text-3xl dark:text-texto-dark font-bold pt-8 pb-3'>Categorías</div>
        <div className='grid grid-cols-3 place-items-center gap-8 px-10 max-sm:grid-cols-1 py-5'>
            {categorias.map((element, index)=>
                <div key={index} className='relative'>
                    <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl'>{element.name}</h3>
                    <img src='/Imagenes/Categorias/Sala.webp' width={400} height={400} alt={element.descripton} 
                    className='rounded-2xl'/>
                </div>
            )}
        </div>
       </div>
    </section>
  )
}

export default Categories