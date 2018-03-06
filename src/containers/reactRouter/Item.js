import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../../actions/index";
import { setItem} from '../../actions/index'
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
        <h1>{name}</h1>
        <ul>
          {description && <li>Description: {description}</li>}
          {price && <li>Price: {price}</li>}
          {make && <li>Make: {make}</li>}
          {model && <li>Model: {model}</li>}
          {dimensions && <li>Dimensions: {dimensions}</li>}
          {image && <li>Image: {image}</li>}
          {notes && <li>Notes: {notes}</li>}
        </ul>
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
