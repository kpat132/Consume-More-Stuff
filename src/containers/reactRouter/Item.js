import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../../actions/ItemsAction";
import { setItem } from "../../actions/ItemsAction";
import { withRouter } from "react-router-dom";
import EditItem from "../../containers/EditItem";
import EditItemButton from "../../components/EditItemButton";
import BackToItemsButton from "../../components/BackToItemsButton";

import Overdrive from "react-overdrive";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleBackToItems = this.handleBackToItems.bind(this);
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
  handleBackToItems(event) {
    this.props.history.push("/items");
  }

  render() {
    let EditButton = null;
    if (localStorage.length > 0 && this.props.item.user_id == localStorage.id) {
      EditButton = <EditItemButton />;
    }
    console.log(this.props.item.user_id);
    console.log("LS", localStorage.id);

    let newObj = { ...this.state.users };
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
      <Overdrive
        id="item-to-image"
        duration={10}
        animationDelay={3}
        style={{ display: "flex" }}
      >
        <div className="item">
          <div className="item-img-container">
            <div className="item-img">
              <h1>IMG</h1>
              {image ? (
                <img src={image} />
              ) : (
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOigxPC1OtYYo1yJ2tJdBh_a7Nx4c23HUFw0kxZHQHiQ8pT2d" />
              )}

              <EditItemButton />
              <form onSubmit={this.handleBackToItems}>
                <button className="BackToItemsButton-container" type="submit">
                  Back
                </button>
              </form>
            </div>
          </div>
          <div className="item-content">
            <div className="item-name">
              <h1>{name}</h1>
            </div>
            <div className="item-info">
              <ul>
                {price && <li>Price: ${price}</li>}
                {description && <li>Description: {description}</li>}
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
              <br />
              <text> Username:</text>
              {newObj.username}
            </div>
          </div>
        </div>
      </Overdrive>
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
    setItem: id => {
      dispatch(setItem(id));
    }
  };
};
const ConnectedItem = connect(mapStateToProps, mapDispatchToProps)(Item);

export default withRouter(connect(mapStateToProps)(ConnectedItem));
