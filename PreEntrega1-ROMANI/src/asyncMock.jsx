import model1 from './Components/Assets/model1.png';
import model2 from './Components/Assets/model2.png';
import model3 from './Components/Assets/model3.png';

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
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        },500)
    })
}