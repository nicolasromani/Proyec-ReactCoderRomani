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
        id:1,
        title:"Dobby-Wars",
        description: "Descripcion de remera",
        price: 4500,
        pictureUrl: model1
    },
    {
        id:2,
        title:"Dobby-face",
        description: "Descripcion de remera",
        price: 4200,
        pictureUrl: model2
    },
    {
        id:3,
        title:"Dobby-lazy",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: model3
    },
    {
        id:4,
        title:"Bajo Chaleco Multicam",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: bajo1
    },
    {
        id:5,
        title:"Operador",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: model6
    },
    {
        id:6,
        title:"Skull-Operator",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: model7
    },
    {
        id:7,
        title:"Gorra Operador",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: gorra1
    },
    {
        id:8,
        title:"Botas Patriot",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: botas1
    },
    {
        id:9,
        title:"Pantalon 3rd Gen",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: pant1
    },
    {
        id:10,
        title:"Mochila Tactica 24hs",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: mochi1
    },
    {
        id:11,
        title:"Combat Vest CONDOR",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: vest4
    },
    {
        id:12,
        title:"Lego-Operator",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: parche5
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