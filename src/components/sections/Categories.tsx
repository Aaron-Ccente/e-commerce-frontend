import React from 'react'

function Categories() {

    const categorias = [
        {"categoria_1":"categoria 1"}, 
        {"categoria_2":"categoria 2"}, 
        {"categoria_3":"categoria 3"}, 
        {"categoria_4":"categoria 4"}, 
        {"categoria_5":"categoria 5"}, 
        {"categoria_6":"categoria 6"}, 
    ];


  return (
    <section id='categorias' className='min-h-screen dark:bg-fondoPrincipal-dark w-full px-4 sm:px-10 md:px-20'>
        <div className='grid grid-cols-3'>
            {categorias.map((element, index)=>
                <div>
                    
                </div>
            )}
        </div>

    </section>
  )
}

export default Categories