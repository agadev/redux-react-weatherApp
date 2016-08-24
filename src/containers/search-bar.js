import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
  }

 onSearchTermChange(event){
   console.log(event.target.value);
   this.setState({ term: event.target.value});
 }

 onFormSubmit(event){
   console.log('Inside form submit');
   event.preventDefault();
   this.props.fetchWeather(this.state.term);
   this.setState({ term: ''});
 }

render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
       <input
         placeholder="Input usa cities to check weather for 5 days"
         className="form-control"
          value= {this.state.term}
          onChange = {this.onSearchTermChange.bind(this) }
       />
       <span className="input-group-btn">
       <button type="submit" className="btn btn-success">Search </button>
       </span>
      </form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps) (SearchBar);
