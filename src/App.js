import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData } from './actions/RestaurantActions';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';



class App extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  onBackButtonClicked() {
      this.props.appData.detail = null;
      this.setState({ appData: this.props.appData});
  }
  renderBackButton() {
    const {
      detail,
    } = this.props.appData;
    if(detail != null){
      return (
        <a href="#"
          onClick={this.onBackButtonClicked.bind(this)}>
          <img
            src={require('./icons/ic_webBack@2x.png')}
                 />
        </a>
      );
    }else {
      return <div />
    }
  }

  renderHeader(){
    return(
      <div className="head-title" style={{ backgroundColor: '#43E895',font:'17px'}}>
        {this.renderBackButton()}
        <p> Lunch Tyme</p>
      </div>
    );
  }
  renderContent() {
    const {
      detail,
      isFetching,
      data,
    } = this.props.appData;
    if(detail != null){
      return <RestaurantDetail
                item = {detail}/>;
    }else {
      console.log(this.props.appData);
      if(isFetching){
        return <p style={{ backgroundColor:'red'}}>Loading...</p>;
      } else {
        if(data.length === 0 ){
          return <p style={{ backgroundColor:'red'}}>Empty...</p>;
        }else {
          return <RestaurantList
                    list={data}></RestaurantList>
        }
      }
    }
  }
  render() {
    return <div>
      {this.renderHeader()}
      {this.renderContent()}
    </div>
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
};
export default connect(mapStateToProps,{fetchData})(App);
