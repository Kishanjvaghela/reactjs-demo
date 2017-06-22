import React, { Component } from 'react';
import './RestaurantItem.css';

class RestaurantDetail extends Component {
  render() {
    const {
      name,
      backgroundImageURL,
      category
    } = this.props.item;
    return (
      <div className="Root">
        <div className="Item">
          <h3>{name}</h3>
          <h5>{category}</h5>
        </div>
        <img src={backgroundImageURL} className="Restaurant-Image" />
    </div>
    );
  }
}

export default RestaurantDetail;
