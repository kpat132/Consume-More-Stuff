import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../actions/index";
import {addItem} from '../actions/index'

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      make: "",
      model: "",
      dimensions: "",
      image: "",
      notes: ""
    };
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  handleChangeMake(event) {
    this.setState({ make: event.target.value });
  }
  handleChangeModel(event) {
    this.setState({ model: event.target.value });
  }
  handleChangeDimensions(event) {
    this.setState({ dimensions: event.target.value });
  }
  handleChangeImage(event) {
    this.setState({ image: event.target.value });
  }
  handleChangeNotes(event) {
    this.setState({ notes: event.target.value });
  }
  handleSubmit(event){
   event.preventDefault()
   const newItem = {
    name: this.state.name,
    description: this.state.description,
    price: parseFloat(this.state.price),
    make: this.state.make,
    model: this.state.model,
    dimensions: this.state.dimensions,
    image: this.state.image,
    notes: this.state.notes
   }
 
   addItem(newItem)

}

  render() {
    
    return (
      <div>
        SMOKE TEST
        <div>
          <form onSubmit = {this.handleSubmit.bind(this)}>
            <br />
            Name
            <br />
            <input type="text" 
            onChange={this.handleChangeName.bind(this)}/>
            <br />
            Price
            <br />
            <input type="text"
            onChange={this.handleChangePrice.bind(this)} />
            <br />
            Description
            <br />
            <input type="text"
            onChange={this.handleChangeDescription.bind(this)} />
            <br />
            Make
            <br />
            <input type="text"
            onChange={this.handleChangeMake.bind(this)} />
            <br />
            Model
            <br />
            <input type="text"
            onChange={this.handleChangeModel.bind(this)} />
            <br />
            Dimensions
            <br />
            <input type="text" 
            onChange={this.handleChangeDimensions.bind(this)}/>
            <br />
            Notes
            <br />
            <input type="text"
            onChange={this.handleChangeNotes.bind(this)} />
            <br />
            <br />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return state.items;
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    }
  };
};

const ConnectedApp = connect(mapStatetoProps, mapDispatchToProps)(AddItem);

export default ConnectedApp;



