import React, { Component } from "react";
import { connect } from 'react-redux';
import { editItem } from '../actions/ItemsAction';


class EditItem extends Component {


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
  handleChangeImg(event) {
  
    this.setState({image:event.target.value})
  }
  handleSubmit(event){
   event.preventDefault()
   const updateItem = {
     user_id:this.props.item.id,
   
    name: this.state.name?this.state.name:this.props.item.name,
    description: this.state.description?this.state.description:this.props.description,
    price: parseFloat(this.state.price)?parseFloat(this.state.price):parseFloat(this.props.price),
    make: this.state.make?this.state.make:this.props.make,
    model: this.state.model?this.state.model:this.props.model,
    dimensions: this.state.dimensions?this.state.dimensions:this.props.dimensions,
    image: this.state.image?this.state.image:this.props.image,
    notes: this.state.notes?this.state.notes:this.props.notes
   }
   
   this.props.editItem(updateItem)
  
  }
  
  render() {

 
    
    return (
      <div>
      
        <div className= 'edit-form'>
        <h1>edit {this.props.item.name}</h1>
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
            Image
            <br />
            <input type="text"
            onChange={this.handleChangeImg.bind(this)} />
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
  return {
    item:state.items.item,
    categories:state.items.categories,
    conditions:state.items.conditions
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editItem: (item)=>{
      dispatch(editItem(item))
    }
  };
};

const ConnectedApp = connect(mapStatetoProps, mapDispatchToProps)(EditItem);

export default ConnectedApp;
