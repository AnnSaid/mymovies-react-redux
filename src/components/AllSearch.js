import React, { Component } from 'react'
import {connect} from 'react-redux'
import SearchForm from './SearchForm'
import MoviesList from './MoviesList'
import StartPage from './StartPage'
import Spinner from './Spinner'

export class AllSearch extends Component {
    render(){
      const {searchState, searchResult} = this.props;
      return (
        <div className="container">
            <SearchForm />
            {
            searchState ? 
            <Spinner /> : 
            searchResult == ''  ?
            <StartPage/>:
            <MoviesList/>
            }
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    searchState: state.moviesreducer.searchState,
    searchResult: state.moviesreducer.searchResult,
  });
  export default connect(mapStateToProps)(AllSearch);