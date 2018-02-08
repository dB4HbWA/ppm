import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProducts } from "./state/action"

const ProductCard = props => (
  <div className="productCard" >
    <img src={props.url} alt="img" height="42" width="42" />
    <div>{props.title}</div>
    <div>{props.price}</div>
  </div>
)

class ProductsView extends Component {
  componentDidMount() {
    this.props.loadProductsToState()
  }
  render() {
    console.log(this.props.loadingProducts)
    return (
      <div className="productview">
        <h1>Products List</h1>
        <div className="card">
          <div className="row">
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div className="card">product image
          </div>
            </div>
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div className="card">product image</div>
            </div>

            {/* <div className="small-2 medium-2 large-2 xlarge-2 columns" />
            <button className="button btn-cta">Edit</button>
          </div>
          <div className="small-6 medium-6 large-6 xlarge-6 columns">
            <button className="button btn-cta">Delete</button> */}
            {/* </div> */}
          </div>
        </div>
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
