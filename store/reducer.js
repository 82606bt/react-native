
import PRODUCTS from "../data/products"

const initialState = {
    products: PRODUCTS,
    filterProducts: PRODUCTS,
    favProducts: [],
    cartProducts: [],
}

const reducer = (state = initialState, action) => {

    //Xử lý action thêm vào yêu thích
    if (action.type === 'ADD_FAVORITE') {
        const index = state.favProducts.findIndex(item => item.id === action.productId)
        if (index >= 0) {
            const updatedProducts = [...state.favProducts]

            updatedProducts.splice(index, 1)


            return { ...state, favProducts: updatedProducts }
        }
        else {
            const findProduct = state.products.find(item => item.id === action.productId)

            const updatedProducts = [...state.favProducts]
            let updatedData = updatedProducts.concat(findProduct)
            return { ...state, favProducts: updatedData }
        }
    }
    //Xử lý action thêm vào giỏ hàng
    if (action.type === 'ADD_CART') {
        const index = state.cartProducts.findIndex(item => item.id === action.productId)
        if (index >= 0) {
            const updatedProducts = [...state.cartProducts]

            updatedProducts.splice(index, 1)


            return { ...state, cartProducts: updatedProducts }
        }
        else {
            const findProduct = state.products.find(item => item.id === action.productId)

            const updatedProducts = [...state.cartProducts]
            let updatedData = updatedProducts.concat(findProduct)
            return { ...state, cartProducts: updatedData }
        }
    }

    // Xử lý action lọc sản phẩm
    if (action.type === 'FILTER_PRODUCT') {

        const appliedFilters = action.filters

        const updatedFilterProduct = state.products.filter(item => {
            if (appliedFilters.isBrandNew !== item.isBrand) {
                return false;
            }

            if (appliedFilters.isSale !== item.isSale) {
                return false;
            }

            return true;

        });
        return { ...state, filterProducts: updatedFilterProduct }

    }
    if (action.type === 'DELETE_FILTER') {
        return { ...state, filterProducts: state.products }
    }
    return state
}

export default reducer;