import React, { Component } from 'react';
import RestaurantItem from './RestaurantItem';
import './RestaurantList.css';
class RestaurantList extends Component {
  render() {
    return (
      <ul className="Root">
        {this.props.list.map((listValue)=>{
           return (
             <RestaurantItem
               key = {listValue.name}
               item = {listValue}
             />);
         })
       }
       </ul>
    );
  }
}
export default RestaurantList;
