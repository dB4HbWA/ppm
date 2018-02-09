import React, { Component } from "react";
import { connect } from "react-redux";

class EditView extends Component {
  constructor(props) {
    super(props);
    const product = this.props.products.find((product) => product.id == this.props.match.params.id)
    this.state = {
      title: product.title,
      price: product.price,
      imgUrl: product.imageUrl,
      titleMsg: "",
      btnDisabled: false
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })

    //validate title
    if (event.target.name === "title") {
      if (event.target.value.length < 4) {
        this.state.titleMsg = "Title must be at least 4 characters"
        this.state.btnDisabled = true
      }
      else {
        this.state.titleMsg = ""
      }
    }
    // validate price
    if (event.target.name === "price") {


      if (event.target.name === "") {
        this.state.priceMsg = "Please enter a valid price"
        this.state.btnDisabled = true
      } else if (isNaN(parseInt(this.state.price, 10))) {
        this.state.priceMsg = "Price must be numeric"
        this.state.btnDisabled = true
      }
      else {
        this.state.priceMsg = ""
      }

    }
    if (this.state.title.length > 0 && this.state.titleMsg === "" && this.state.priceMsg === "") {
      this.state.btnDisabled = false
    }
  }





  render() {

    return (
      <div className="newProductView">
        <h1>Edit Product</h1>
        <div className="card editProductCard">
          <div className="row">
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div>
                Title
              </div>
            </div>
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <input name="title" onChange={this.handleChange} value={this.state.title} type="text" />
            </div>
            <small className="error text-right">{this.state.titleMsg}</small>
          </div>
          <div className="row">
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div>
                Price
              </div>
            </div>
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <input name="price" onChange={this.handleChange} value={this.state.price} type="text" />
            </div>
            <small className="error text-right">{this.state.priceMsg}</small>
          </div>
          <div className="row">
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div>
                Image URL
              </div>
            </div>
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <input name="imgUrl" onChange={this.handleChange} value={this.state.imgUrl} type="text" />
            </div>
          </div>
          <div>
            <button className="btn-cta alert" style={{ margin: '10px' }}>Delete</button>
            <button className="btn-cta info" disabled={this.state.btnDisabled} style={{ margin: '10px' }}>Update</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     editProduct(answer) {
//       if (answer == 8) dispatch({ type: MINE_SHINTO_COINS });
//     }
//   };
// };

export default connect(mapStateToProps, null)(EditView);