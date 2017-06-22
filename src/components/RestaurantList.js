import React, { Component } from 'react';
import RestaurantItem from './RestaurantItem';
import './RestaurantList.css';
class RestaurantList extends Component {
  render() {
    return (
      <ul className="Root">
         {this.props.list.map(function(listValue){
           return (
             <RestaurantItem
               item = {listValue}
             />);
         })}
       </ul>
    );
  }
}
export default RestaurantList;
