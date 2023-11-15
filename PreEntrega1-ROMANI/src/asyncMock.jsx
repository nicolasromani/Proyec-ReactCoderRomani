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
        title:"Dobbyface",
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
        title:"Bajo-Chaleco",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: bajo1
    },
    {
        id:5,
        title:"Mochila-Tactica",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: mochi1
    },
    {
        id:6,
        title:"Botas-combate",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: botas1
    },
    {
        id:7,
        title:"Gorra",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: gorra1
    },
    {
        id:8,
        title:"Remera",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: model6
    },
    {
        id:9,
        title:"Remera",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: model7
    },
    {
        id:10,
        title:"Remera",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: pant1
    },
    {
        id:11,
        title:"Remera",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: parche5
    },
    {
        id:12,
        title:"Remera",
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: vest4
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        },500)
    })
}