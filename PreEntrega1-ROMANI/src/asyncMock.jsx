import model1 from './Components/Assets/model1.png';
import model2 from './Components/Assets/model2.png';
import model3 from './Components/Assets/model3.png';
import mochi1 from './Components/Assets/mochi1.jpg';
import bajo1 from './Components/Assets/bajo1.jpg';
import botas1 from './Components/Assets/botas1.jpg';
import gorra1 from './Components/Assets/gorra1.jpg';
import model6 from './Components/Assets/model6.jpg';
import model7 from './Components/Assets/model7.jpg';
import pant1 from './Components/Assets/pant1.jpg';
import parche5 from './Components/Assets/parche5.jpg';
import vest4 from './Components/Assets/vest4.jpg';

const products = [
    {
        id:'1',
        category: 'remeras', 
        title:"Dobby-Wars",
        description: "Descripcion de articulo",
        price: 4500,
        pictureUrl: model1,
        stock: 4
    },
    {
        id:'2',
        category:'remeras',
        title:"Dobby-face",
        description: "Descripcion de articulo",
        price: 4200,
        pictureUrl: model2,
        stock: 6
    },
    {
        id:'3',
        category:'remeras',
        title:"Dobby-lazy",
        description: "Descripcion de articulo",
        price: 4000,
        pictureUrl: model3,
        stock: 3
    },
    {
        id:'4',
        category:'uniformes',
        title:"Bajo Chaleco Multicam",
        description: "Descripcion de articulo",
        price: 3860,
        pictureUrl: bajo1,
        stock: 8
    },
    {
        id:'5',
        title:"Operador",
        category:'remeras',
        description: "Descripcion de articulo",
        price: 3980,
        pictureUrl: model6,
        stock: 4
    },
    {
        id:'6',
        category:'remeras',
        title:"Skull-Operator",
        description: "Descripcion de articulo",
        price: 4050,
        pictureUrl: model7,
        stock: 10
    },
    {
        id:'7',
        category:'gorrasyparches',
        title:"Gorra Operador",
        description: "Descripcion de articulo",
        price: 4100,
        pictureUrl: gorra1,
        stock: 9
    },
    {
        id:'8',
        category:'uniformes',
        title:"Botas Patriot",
        description: "Descripcion de articulo",
        price: 4250,
        pictureUrl: botas1,
        stock: 2
    },
    {
        id:'9',
        category:'uniformes',
        title:"Pantalon 3rd Gen",
        description: "Descripcion de articulo",
        price: 4300,
        pictureUrl: pant1,
        stock: 7
    },
    {
        id:'10',
        category:'equipo',
        title:"Mochila Tactica 24hs",
        description: "Descripcion de articulo",
        price: 3900,
        pictureUrl: mochi1,
        stock: 6
    },
    {
        id:'11',
        category:'equipo',
        title:"Combat Vest CONDOR",
        description: "Descripcion de articulo",
        price: 3800,
        pictureUrl: vest4,
        stock: 8
    },
    {
        id:'12',
        category:'gorrasyparches',
        title:"Lego-Operator",
        description: "Descripcion de articulo",
        price: 3750,
        pictureUrl: parche5,
        stock: 5
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id == productId))
        },500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category == productCategory))
        },500)
    })
}