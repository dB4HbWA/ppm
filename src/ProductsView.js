import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProducts } from "./state/action";
import { Redirect } from 'react-router-dom'

const ProductCard = ({ product }) => {

  function clickedEdit(id) {
    console.log("/products/edit/" + product.id);
    <Redirect to={"/products/edit/" + product.id} />
  }

  return (
    <div className="productCard" >
      <img src={product.imageUrl ? product.imageUrl : "https://blog.sqlauthority.com/i/a/errorstop.png"} alt="img" height="300" width="300" />
      <div>{product.title}</div>
      <div>${product.price}</div>
      <div className="cardButtonContainer"><button onClick={() => (clickedEdit(product.id)) } className="cardButton warning">Edit</button></div>
      <div className="cardButtonContainer"><button className="cardButton alert">Delete</button></div>
    </div>
  )
}

class ProductsView extends Component {
  componentDidMount() {
    this.props.loadProductsToState()
  }
  render() {
    console.log(this.props)
    return (
      <div className="productview">
        <h1>Products List</h1>
        {this.props.products.length > 0 ? (
          <div className="card" style={{ width: '700px' }}>
            <div className="row">
              {this.props.products.map((product) => (
                <div key={product.id} className="small-6 medium-6 large-6 xlarge-6 columns">
                  <div className="card">
                    <ProductCard product={product} />
                  </div>
                </div>
              ))}


              {/* <div className="small-2 medium-2 large-2 xlarge-2 columns" />
            <button className="button btn-cta">Edit</button>
          </div>
          <div className="small-6 medium-6 large-6 xlarge-6 columns">
            <button className="button btn-cta">Delete</button> */}
              {/* </div> */}
            </div>
          </div>
        ) : null
        }
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    loadingProducts: state.loadingProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProductsToState: () => dispatch(
      loadProducts()
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
