import React, { Component } from "react";
import { connect } from "react-redux";

class NewProductView extends Component {
  render() {
    return (
      <div className="newProductView">
        <h1>Create a New Product</h1>s
         <div>
             <div>Tite<input/></div>
             <div>Price<input/></div>
             <div>Image  URL<input/></div>
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
export default NewProductView;
