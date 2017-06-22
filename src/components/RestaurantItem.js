import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RestaurantItem.css';
import { onItemClicked } from '../actions/RestaurantActions';

class RestaurantItem extends Component {
  render() {
    const {
      name,
      backgroundImageURL,
      category
    } = this.props.item;

    return (
      <div className="Root">
        <a href="#" onClick={this.props.onItemClicked.bind(this,this.props.item)}>
        <div className="Item">
          <h3>{name}</h3>
          <h5>{category}</h5>
        </div>
        <img src={backgroundImageURL} className="Restaurant-Image" />
        </a>
    </div>
    );
  }
}

// export default RestaurantItem;
function mapStateToProps (state) {
  return {
    appData: state.appData
  }
};
export default connect(mapStateToProps,{onItemClicked})(RestaurantItem);
