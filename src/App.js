import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import RestaurantItem from './components/RestaurantItem';
import RestaurantList from './components/RestaurantList';
import { fetchData } from './actions/RestaurantActions';

class App extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
          {
            this.props.appData.isFetching && <p>Loading...</p>
          }
          {
            this.props.appData.data.length ?
            (<RestaurantList list={this.props.appData.data}></RestaurantList>)
            : <p>{this.props.appData.data.length}</p>
          }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
};
export default connect(mapStateToProps,{fetchData})(App);
