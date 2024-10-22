import React from 'react'
import Noticia from './components/Noticia'



function App() {

  const noti = [
    {
      id: 0,  
      name: "Titulo 1",
      fecha: "19 de octubre de 2024",
      imgSrc: "src/assets/sky.jpg",    
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",  // Descripción del testimonio.
      alt: "cielo"  
    },
    {
      id: 1,  
      name: "Titulo 2",
      fecha: "19 de octubre de 2024",
      imgSrc: "src/assets/sea.jpg",    
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",  // Descripción del testimonio.
      alt: "mar"  
    },
    {
      id: 2,  
      name: "Titulo 3",
      fecha: "19 de octubre de 2024",
      imgSrc: "src/assets/tux.jpg",    
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",  // Descripción del testimonio.
      alt: "linux"  
    },
    {
      id: 3,  
      name: "Titulo 4",
      fecha: "19 de octubre de 2024",
      imgSrc: "src/assets/mario.jpg",    
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",  // Descripción del testimonio.
      alt: "mario"  
    },
  ]
  return (
    <div>
      {noti.map((noticia) => (
        <Noticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
}
export default App
