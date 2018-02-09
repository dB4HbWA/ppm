import axios from "axios"
import history from '../history'

export const REQUEST_PRODUCTS = "_REQUEST_PRODUCTS";
export const RECEIVED_PRODUCTS = "_RECEIVED_PRODUCTS";
export const ADD_PRODUCT = "_ADD_PRODUCT";
export const DELETE_PRODUCT = "_DELETE_PRODUCT";
export const UPDATE_PRODUCT = "_UPDATE_PRODUCT";

function loadProducts() {
    return (dispatch, getState, api) => {
        dispatch({ type: REQUEST_PRODUCTS })
        axios.get(api)
            .then(({ data: products }) => {
                dispatch({ type: RECEIVED_PRODUCTS, payload: products })
                history.push("/products/");
            })
    }
}

function createNewProduct(product) {
    return (dispatch, getState, api) => {

        const productObj = {
            title: product.title,
            price: product.price,
            imageUrl: product.imgUrl
        }
        axios.post(api, productObj)
            .then((response) => {
                dispatch(
                    loadProducts()
                )
            }
            )
    }
}

function deleteProduct(productId) {
    return (dispatch, getState, api) => {

        axios.delete(api + "/" + productId)
            .then((response) => {
                dispatch(
                    loadProducts()
                )
            }
            )
    }
}

function editProduct(productId, productObj) {
    return (dispatch, getState, api) => {
        axios.put(api + "/" + productId, productObj)
            .then((response) => {
                dispatch(
                    loadProducts()
                )
            }
            )
    }
}

export { loadProducts, createNewProduct, deleteProduct, editProduct }
