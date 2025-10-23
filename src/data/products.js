// Simulamos una "API" local: array de plantas con más detalles
const products = [
  {
    id: 1,
    name: 'Potus',
    price: 1200,
    image: 'https://pcfb.gumlet.io/images/articles/golden-pothos-in-hanging-basket.png?w=640&h=426&mode=crop&crop=smart&s=50e6ea2942716506fe3ebf1096ab111b',
    description: 'Planta colgante fácil de cuidar. Ideal para interiores.',
    luz: 'Media sombra o luz indirecta',
    riego: '1-2 veces por semana',
    cuidados: 'Evitar sol directo. Pulverizar las hojas en verano.',
    tamaño: 'Altura promedio 30-50 cm'
  },
  {
    id: 2,
    name: 'Sansevieria',
    price: 2200,
    image: 'https://media.istockphoto.com/id/1398268775/photo/beautiful-potted-plants-in-room-interior-design.jpg?s=612x612&w=0&k=20&c=0_nsX9glx4Y-TUQwP6EFFEofCmLikOzPErCav654YOM=',
    description: 'Planta resistente, muy buena para principiantes.',
    luz: 'Luz indirecta o media sombra',
    riego: 'Cada 10-15 días',
    cuidados: 'Evitar exceso de agua. Ideal para interiores secos.',
    tamaño: 'Altura hasta 70 cm'
  },
  {
    id: 3,
    name: 'Helecho',
    price: 1800,
    image: 'https://services.meteored.com/img/article/como-cuidar-y-cultivar-un-helecho-en-casa-consejos-practicos-para-una-planta-sana-1731978854466_1280.jpg',
    description: 'Helecho frondoso, requiere riego moderado.',
    luz: 'Luz difusa o sombra parcial',
    riego: 'Cada 3-4 días',
    cuidados: 'Mantener la tierra húmeda y evitar corrientes de aire.',
    tamaño: 'Diámetro 40 cm'
  },
  {
    id: 4,
    name: 'Rosa del Desierto',
    price: 2100,
    image: 'https://florastore.com/cdn/shop/files/4513131_Atmosphere_01_SQ.jpg?v=1751966107&width=1080',
    description: 'Planta suculenta de flores intensas y tallo grueso.',
    luz: 'Pleno sol',
    riego: 'Cada 10-12 días',
    cuidados: 'Evitar exceso de humedad. Ideal para exteriores.',
    tamaño: 'Altura 25-40 cm'
  },
  {
    id: 5,
    name: 'Oreja de Elefante',
    price: 3000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-Fp8w-uSlmv9FjS8eGD5tFN2dSeHJOfrag&s',
    description: 'Planta tropical con hojas grandes y decorativas.',
    luz: 'Media sombra',
    riego: 'Cada 3 días',
    cuidados: 'No exponer a sol directo. Mantener la humedad ambiental.',
    tamaño: 'Altura 60-100 cm'
  },
  
  {
    id: 6,
    name: 'Orquídea',
    price: 3250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ll06WdqjLDxl2GieSTSvhS42X5jz0G-90g&s',
    description: 'Flor exótica que requiere cuidados específicos.',
    luz: 'Luz indirecta brillante',
    riego: 'Una vez por semana',
    cuidados: 'Evitar mojar las flores. Regar solo cuando el sustrato esté seco.',
    tamaño: 'Altura 30-50 cm'
  },
  {
    id: 7,
    name: 'Anturio',
    price: 2250,
    image: 'https://mygarden.com.co/wp-content/uploads/2020/01/PLANTA-ANTURIO-HOLANDES..jpg',
    description: 'Planta tropical con flores rojas brillantes.',
    luz: 'Luz indirecta',
    riego: 'Cada 4-5 días',
    cuidados: 'Mantener la humedad alta. No exponer al sol directo.',
    tamaño: 'Altura 40-60 cm'
  },
  {
    id: 8,
    name: 'Ave del Paraíso',
    price: 1250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3D-ypzBzXHkMd0bvJaFA8Xm4umZ4H5XTccg&s',
    description: 'Planta ornamental de grandes hojas y flores exóticas.',
    luz: 'Pleno sol o luz intensa',
    riego: 'Cada 5 días',
    cuidados: 'Ideal para exteriores. Fertilizar en primavera.',
    tamaño: 'Altura 1-1.5 metros'
  }
]

export default products
