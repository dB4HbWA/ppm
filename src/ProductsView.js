import React, { Component } from "react";
import { connect } from "react-redux";

class ProductsView extends Component {
  render() {
    return (
      <div className="productview">
        <h1>Products List</h1>
        <div className="col">
          <div className="small-1 medium-1 large-1 xlarge-1 columns">
            product image
          </div>
          <div className="small-2 medium-2 large-2 xlarge-2 columns" />

          <div className="small-1 medium-1 large-1 xlarge-1 columns" />
          <div className="small-2 medium-2 large-2 xlarge-2 columns">
            <button className="button btn-cta">Edit</button>
          </div>
          <div className="small-6 medium-6 large-6 xlarge-6 columns">
            <button className="button btn-cta">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     value: state.value
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     mineCoin(answer) {
//       if (answer == 8) dispatch({ type: MINE_SHINTO_COINS });
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductsView);
export default ProductsView
