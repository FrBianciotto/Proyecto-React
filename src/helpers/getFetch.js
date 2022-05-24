let listaProductos = [
    {id: '0' ,categoria: 'fiambres', nombre: 'bondiola', descripcion:'La clasica bondiolita,con un sabor unico en cualquiera de sus opciones: Natural, con finas hierbas o a la pimienta',stock: 20, precio: 1000, imagen:'https://i.ibb.co/f1MmyqL/Bondiola.jpg'},
    {id: '1' ,categoria: 'fiambres', nombre: 'solomillo', descripcion:'Solomillo de cerdo super magro y sabroso. Podes probarlo en su versión natural o con hierbas',stock: 20, precio: 1000, imagen:'https://i.ibb.co/7RwNMFp/Solomillo.jpg'},
    {id: '2' ,categoria: 'fiambres', nombre: 'lomito ahumado', descripcion:'Lomito de cerdo codido y ahumado, con cobertura de pimenton ahumado',stock: 20, precio: 1000, imagen:'https://i.ibb.co/199kHMv/Lomito-Ahumado.jpg'},
    {id: '3' ,categoria: 'conservas', nombre: 'tomates secos', descripcion:'Tomates secos en conserva con aceite de oliva, ajo y albahaca. Una delicia para acompañar cualquier plato.',stock: 20, precio: 1000, imagen:'https://i.ibb.co/c6ZbWWd/Tomates-Secos.jpg'},
    {id: '4' ,categoria: 'conservas', nombre: 'escabeche de berenjena', descripcion:'Berenjenas seleccionadas y curadas, en una conserva super sabrosa. Ideal para acompañar comidas y picadas.',stock: 20, precio: 1000, imagen:'https://i.ibb.co/yRFbbQB/Escabeche-Berenjenas.jpg'},
    {id: '5' ,categoria: 'box', nombre: 'picada clasica', descripcion:'Bondiola artesanal, jamon cocido, lomo cocido ahumado, salame, queso tybo, queso holanda, queso azul, escabeche artesanal, aceitunas, tomates secos.',stock: 20, precio: 1000, imagen:'https://i.ibb.co/v4CYdF3/picada-Clasica.jpg'}
  ]

 export const getFetch = (id)=>{
    return  new Promise((resolve)=>{
        setTimeout(()=>{
            const query= id ? listaProductos.find(producto=> producto.id === id): listaProductos;
            resolve(query);
        },2000)
    })   
 }