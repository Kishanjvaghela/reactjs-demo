import React, { Component } from 'react';

class RestaurantList extends Component {
  render() {
    return (
      <ul>
         {this.props.list.map(function(listValue){
           return <p>{listValue.name}</p>;
         })}
       </ul>

    );
  }
}
export default RestaurantList;
