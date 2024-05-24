const products = [
{
    id: '1', name: 'Campera de Boca Azul', price: 96000, category: 'camperas', img: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/c/a/campera-de-boca-adidas-originals-azul-10002eil1050001-1.jpg', stock: 45, description: 'Campera boca azul originals'
},
{
    id: '2', name: 'Pantalon CABJ 2024', price: 44000, category: 'pantalones', img: 'https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/u6cc872wantd3nujp90q9y62h1ry/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5', stock: 24, description: 'Pantalon de juego'
},
{
    id: '3', name: 'Campera oficial 2024', price: 135000, category: 'camperas', img: 'https://newsport.vtexassets.com/arquivos/ids/18704830-800-auto?v=638446646541870000&width=800&height=auto&aspect=true', stock: 15, description: 'Campera de invierno'
},
{
    id: '4', name: 'Buzo Boca Adidas', price: 67000, category: 'buzos', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8dfce66057a84c508766c1517ed58483_9366/Buzo_Ligero_de_Entrenamiento_Boca_Juniors_Turquesa_HY0403_01_laydown.jpg', stock: 45, description: 'Buzo adidas cabj azul'
},
{
    id: '5', name: 'Buzo Cabj Azul Escudo', price: 98000, category: 'buzos', img: 'https://newsport.vtexassets.com/arquivos/ids/19003862-800-auto?v=638518081349330000&width=800&height=auto&aspect=true', stock: 45, description: 'Buzo adidas Boca Juniors con esucudo'
},
{
    id: '6', name: 'Buzo Adidas Boca Juniors', price: 46000, category: 'buzos', img: 'https://coppelar.vtexassets.com/arquivos/ids/1763243-800-auto?v=638258903910400000&width=800&height=auto&aspect=true', stock: 45, description: 'Buzo Adidas Boca Gris'
},
{
    id: '7', name: 'Pantalon Entrenamiento', price: 112000, category: 'pantalones', img: 'https://bocashop.vteximg.com.br/arquivos/ids/169033-1000-1000/HC0995_4.jpg?v=638019159418600000', stock: 24, description: 'Pantalon de entrenamiento convido'
},
{
    id: '8', name: 'Pantalon Nueva Temporada 2024', price: 92000, category: 'pantalones', img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e53c1413f30242d6af537620f364f32d_9366/Pantalon_Boca_Juniors_Gameday_Azul_HY0376_01_laydown.jpg', stock: 24, description: 'Pantalon nueva temporada cabj'
},
{
    id: '9', name: 'Pantalon 2022', price: 66000, category: 'pantalones', img: 'https://acdn.mitiendanube.com/stores/002/638/533/products/5139f241-439b-4e57-884d-f6a50f95a5ad-0facec2befc4ab62c317135404825321-640-0.webp', stock: 24, description: 'Pantalon de entrenamiento 2022'
},
{
    id: '10', name: 'Camperon Nuevo', price: 250000, category: 'camperas', img: 'https://sporting.vtexassets.com/arquivos/ids/1152818-800-800?v=638477482426870000&width=800&height=800&aspect=true', stock: 45, description: 'Camperon Nueva Temporada'
},
{
    id: '11', name: 'Campera anthen adidas', price: 144000, category: 'camperas', img: 'https://www.digitalsport.com.ar/files/products/663be81235772-623614-500x500.jpg', stock: 45, description: 'Campera anthen azul'
},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    // Simplemente devuelve los productos que coincidan con la categoría
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};
