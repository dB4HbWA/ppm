import React, { Component } from "react";
import { connect } from "react-redux";
import { editProduct, deleteProduct } from "./state/action";

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
        this.setState({titleMsg: "Title must be at least 4 characters", btnDisabled: true})
      }
      else {
        this.setState({titleMsg: ""})
      }
    }
    // validate price
    if (event.target.name === "price") {


      if (event.target.name === "") {
        this.setState({priceMsg: "Please enter a valid price", btnDisabled: true})
      } else if (isNaN(parseInt(this.state.price, 10))) {
        this.setState({priceMsg: "Price must be numeric", btnDisabled: true})
      }
      else {
        this.setState({priceMsg: ""})
      }

    }
    if (this.state.title.length > 0 && this.state.titleMsg === "" && this.state.priceMsg === "") {
      this.setState({btnDisabled:false})
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
            <button className="btn-cta alert" style={{ margin: '10px' }} onClick={() => this.props.deleteProduct(this.props.match.params.id)} >Delete</button>
            <button className="btn-cta info" disabled={this.state.btnDisabled}  onClick={() => this.props.editProduct(this.props.match.params.id, {title: this.state.title, imageUrl: this.state.imgUrl, price: this.state.price})} style={{ margin: '10px' }}>Update</button>
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

const mapDispatchToProps = dispatch => {
  return {
    editProduct: (productId, productObj) => dispatch(
      editProduct(productId, productObj)
    ),
    deleteProduct: (productId) => dispatch(
      deleteProduct(productId)
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditView);