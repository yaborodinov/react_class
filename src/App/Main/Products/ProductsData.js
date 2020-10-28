const productsData = [
    {   
        id:1,
        name: "Iphone X",
        // description: "This is iPhone X",
        capacity: 64,
        price: 500,
        type: "phone",
        // image:"/images/products/iphone.png",
    },
    {   
        id:2,
        name: "iPad Pro",
        description: "This is iPad Pro",
        capacity: 124,
        price: 1500,
        type: "iPad",
        image: "/images/products/ipad.png",

    },
    {   
        id:3,
        name: "iMac",
        description: "This is iMac 27",
        capacity: 256,
        price: 3000,
        type: "iMac",
        image: "/images/products/iMac.png",

    },
    {   
        id:4,
        name: "Apple iWatch",
        description: "This is Apple iWatch",
        capacity: 16,
        price: 850,
        type: "watch",
        image: "/images/products/iWatch.png",

    },
]
export const getProductMap = (array) => {
    return array.reduce((accObj, product) => ({
        ...accObj,
        [product.id]: product
    }), {})
}




export default productsData
