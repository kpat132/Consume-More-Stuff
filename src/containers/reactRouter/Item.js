import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../../actions/ItemsAction";
import { setItem} from '../../actions/ItemsAction'
import { withRouter } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.setItem(this.props.match.params.id);
    const itemId = this.props.match.params.id;
    if (itemId) {
      return fetch(`/api/items/${itemId}`)
        .then(response => {
          return response.json();
        })
        .then(item => {
          
          this.setState({ ...item });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    
    let newObj = {...this.state.users};
    console.log(newObj.email);
    
    if (this.state.detail === "not found") {
      return <Redirect to="/items" />;
    }
    const {
      name,
      description,
      price,
      make,
      model,
      dimensions,
      image,
      notes
    } = this.state;
    return (
      <div className="item">
        <div className='item-img-container'>
          <div className='item-img'>
            <h1>IMG</h1>
            {image &&<img src={ image } />}
          </div>
        </div>
        <div className='item-content'>
          <div className="item-name" ><h1>{name}</h1>
          </div>
          <div className='item-info'>
            <ul>
              {price && <li>Price: {price}</li>}
              {description && <li>Description:} {description}</li>}
              {make && <li>Make: {make}</li>}
              {model && <li>Model: {model}</li>}
              {dimensions && <li>Dimensions: {dimensions}</li>}
              
              {notes && <li>Notes: {notes}</li>}
          </ul>
          </div>
          <div className="user-content">

            <h2>Contact Info</h2>
            <text> Email:</text>
            {newObj.email}
            <br/>
            <text> Username:</text>
            {newObj.username}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.items;
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => {
      dispatch(getItems());
    },
    setItem: (id) => {
      dispatch(setItem(id))
    }
  };
};
const ConnectedItem = connect(mapStateToProps, mapDispatchToProps)(Item);

export default withRouter(connect(mapStateToProps)(ConnectedItem));
