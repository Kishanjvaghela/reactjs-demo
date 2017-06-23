import React, { Component } from 'react';
import './RestaurantDetail.css';

class RestaurantDetail extends Component {

  generateMapUrl() {
    const {
      location
    } = this.props.item;
    const center = location.lat+","+location.lng;
    return "https://maps.googleapis.com/maps/api/staticmap?center="
    +center
    +"&zoom=13"
    +"&size=600x300"
    +"&maptype=roadmap"
    +"&markers=color:blue%7Clabel:S%7C"+center;
  }
  render() {
    const {
      name,
      backgroundImageURL,
      category,
      contact,
      location
    } = this.props.item;
    return (
      <div className="item-details">
        <div className="img">
          <img src={this.generateMapUrl()} className="Map" />
        </div>
        <div className="item-info">
          <div className="item-title" style={{ backgroundColor:'#34b379'}}>
              <h3>{name}</h3>
              <h5>{category}</h5>
          </div>
          <ul className="address">
            {location.formattedAddress.map((address)=>{
               return <p>{address}</p>;
              })
            }
           </ul>

           <p>{contact.formattedPhone}</p>
           <p>{"@"+contact.twitter}</p>
         </div>
    </div>
    );
  }
}

export default RestaurantDetail;
