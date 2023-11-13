const products = [
    {
        id:1,
        title:Dobby-Wars,
        description: "Descripcion de remera",
        price: 4500,
        pictureUrl: './Components/Assets/model1.jpg'
    },
    {
        id:2,
        title:Dobby-face,
        description: "Descripcion de remera",
        price: 4200,
        pictureUrl: './Components/Assets/model2.jpg' 
    },
    {
        id:3,
        title:Dobby-lazy,
        description: "Descripcion de remera",
        price: 3800,
        pictureUrl: './Components/Assets/model3.jpg' 
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        },5000)
    })
}