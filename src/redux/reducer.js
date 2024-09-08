export const cartData = (data = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...data, action.data]
        case 'REMOVE_FROM_CART':
            data.length = data.length - 1
            return [...data]
        default:
            return data
    }
}

export const productListData = (data = [], action) => {
    console.log('action', action)
    switch (action.type) {
        case 'SET_PRODUCT_LIST':
            return [action.data]
        default:
            return data
    }
}