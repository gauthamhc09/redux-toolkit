export const addToCart = (data) => {
    // console.log('data', data)
    return {
        type: 'ADD_TO_CART',
        data
    }
}

export const removeFromCart = () => {
    // console.log('data', data)
    return {
        type: 'REMOVE_FROM_CART',
    }
}

export const productListAdd = () => {
    return {
        type: 'PRODUCT_LIST_ADD',
    }
}


