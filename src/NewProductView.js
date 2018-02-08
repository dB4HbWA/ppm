import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewProduct } from "./state/action";

class NewProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      imgUrl: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="newProductView">
        <h1>Create a New Product</h1>
        <div className="card newProductCard">
          <div className="row">
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div>
                Title
              </div>
            </div>
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <input name="title" onChange={this.handleChange} type="text"/>
            </div>
          </div>
          <div className="row">
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div>
                Price
              </div>
            </div>
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <input name="price" onChange={this.handleChange} type="text"/>
            </div>
          </div>
          <div className="row">
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <div>
                Image URL
              </div>
            </div>
            <div className="small-6 medium-6 large-6 xlarge-6 columns">
              <input name="imgUrl" onChange={this.handleChange} type="text"/>
            </div>
          </div>
          <div>
            <button className="success" onClick={() => this.props.createProduct(this.state)} >Create</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (product) => dispatch(
      createNewProduct(product)
    )
  };
};

export default connect(null, mapDispatchToProps)(NewProductView);