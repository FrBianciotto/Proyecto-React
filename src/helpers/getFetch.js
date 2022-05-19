let listaProductos = [
    {id: '0' ,categoria: 'fiambres', nombre: 'bondiola', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/f1MmyqL/Bondiola.jpg'},
    {id: '1' ,categoria: 'fiambres', nombre: 'solomillo', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/7RwNMFp/Solomillo.jpg'},
    {id: '2' ,categoria: 'fiambres', nombre: 'lomito ahumado', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/199kHMv/Lomito-Ahumado.jpg'},
    {id: '3' ,categoria: 'conservas', nombre: 'tomates secos', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/c6ZbWWd/Tomates-Secos.jpg'},
    {id: '4' ,categoria: 'conservas', nombre: 'escabeche de berenjena', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/yRFbbQB/Escabeche-Berenjenas.jpg'},
    {id: '5' ,categoria: 'box', nombre: 'picada clasica', descripcion:'-',stock: 20, precio: 1000, imagen:'https://i.ibb.co/v4CYdF3/picada-Clasica.jpg'}
  ]

 export const getFetch = (id)=>{
    return  new Promise((resolve)=>{
        setTimeout(()=>{
            const query= id ? listaProductos.find(producto=> producto.id === id): listaProductos;
            resolve(query);
        },2000)
    })   
 }