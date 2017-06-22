import React, { Component } from 'react';
import { connect } from 'react-redux';

import RestaurantItem from './components/RestaurantItem';
import RestaurantList from './components/RestaurantList';
import { fetchData } from './actions/RestaurantActions';

class App extends Component {

  componentWillMount() {
    this.props.fetchData();
  }


  render() {
    if(this.props.appData.detail != null){
      return <p>{this.props.appData.detail.name}</p>
    }else {
      if(this.props.appData.isFetching){
        return <p style={{ backgroundColor:'red'}}>Loading...</p>;
      } else {
        if(this.props.appData.data.length === 0 ){
          return <p style={{ backgroundColor:'red'}}>Empty...</p>;
        }else {
          return <RestaurantList
                    list={this.props.appData.data}></RestaurantList>
        }
      }
    }
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
};
export default connect(mapStateToProps,{fetchData})(App);
