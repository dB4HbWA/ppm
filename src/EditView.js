import React, { Component } from "react";
import { connect } from "react-redux";

class EditView extends Component {
  render() {
    return (
      <div className="editView">
        <h1>Edit Product</h1>
        <div className="row">
          <div className="small-1 medium-1 large-1 xlarge-1 columns">Title</div>
          <input></input>
          <div className="small-2 medium-2 large-2 xlarge-2 columns">Price</div>
          <input></input>

          <div className="small-1 medium-1 large-1 xlarge-1 columns">
            Image URL
            <input></input>
          </div>
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
export default EditView;
