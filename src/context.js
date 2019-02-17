import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';
const ProductsContext = React.createContext();
//Provider
//Consumer


class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailedProducts: detailProduct
    }
    handleDetail = () => {
        console.log('Hello from detail');
    }
    addToCart = () => {
        console.log('Hello from add to cart');
    }

  render() {
    return (
        <ProductsContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart
        }}>
            {this.props.children}
        </ProductsContext.Provider>
    )
  }
}

const ProductConsumer = ProductsContext.Consumer;
export {ProductProvider, ProductConsumer};