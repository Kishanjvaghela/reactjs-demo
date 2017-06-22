import React, { Component } from 'react';
import './RestaurantDetail.css';

class RestaurantDetail extends Component {
  render() {
    const {
      name,
      backgroundImageURL,
      category,
      contact,
      location
    } = this.props.item;
    return (
      <div>
        <img src={backgroundImageURL} className="Map" />
        <div style={{ backgroundColor:'#34b379'}}>
            <h3>{name}</h3>
            <h5>{category}</h5>
        </div>
        <ul>
          {location.formattedAddress.map((address)=>{
             return <p>{address}</p>;
            })
          }
         </ul>

         <p>{contact.formattedPhone}</p>
         <p>{"@"+contact.twitter}</p>
    </div>
    );
  }
}

export default RestaurantDetail;
