import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProducts, deleteProduct } from "./state/action";
import history from './history'

const ProductCard = (props) => {

  function clickedEdit(id) {
    history.push("/products/edit/" + props.product.id);
  }

  function clickedDelete(id) {
    props.deleteProduct(id)

  }

  return (
    <div className="productCard" >
      <img src={props.product.imageUrl ? props.product.imageUrl : "https://blog.sqlauthority.com/i/a/errorstop.png"} alt="img" style={{height:"300px", width:"300px"}} />
      <div>{props.product.title}</div>
      <div>${props.product.price}</div>
      <div className="cardButtonContainer"><button onClick={() => (clickedEdit(props.product.id)) } className="cardButton warning">Edit</button></div>
      <div className="cardButtonContainer"><button onClick={() => (clickedDelete(props.product.id)) } className="cardButton alert">Delete</button></div>
    </div>
  )
}

const mapDispatchToCard = dispatch => {
  return {
    deleteProduct: (productId) => dispatch(
      deleteProduct(productId)
    )
  }
};

const ProductCardWrapped = connect(null, mapDispatchToCard)(ProductCard);

class ProductsView extends Component {
  componentDidMount() {
    this.props.loadProductsToState()
  }
  render() {
    return (
      <div className="productview">
        <h1>Products List</h1>
        {this.props.products.length > 0 ? (
          <div className="card" style={{ width: '700px' }}>
            <div className="row">
              {this.props.products.map((product) => (
                <div key={product.id} className="small-6 medium-6 large-6 xlarge-6 columns">
                  <div className="card">
                    <ProductCardWrapped product={product} />
                  </div>
                </div>
              ))}
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
