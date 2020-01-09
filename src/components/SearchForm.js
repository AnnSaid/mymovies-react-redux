import React, { Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {searchMovieAction, getMoviesAction, setSearchState} from '../actions/searchActions'


class SearchForm extends Component {

    changeText = e => {
        this.props.searchMovieAction(e.target.value);
    } 

    submitSearch = e =>{
        e.preventDefault();
        if(this.props.searchKeyword !== ''){
            this.props.getMoviesAction(this.props.searchKeyword);
            this.props.setSearchState();
        }
 
    }
    
  render(){
    return (
        <Fragment>
            <form className="searchForm" onSubmit={this.submitSearch}>
                <h2 className="formhead">Search your favourite Movies and TV Series </h2>
                <input type="text" className="input-search" placeholder="Enter the Movie or TV Series" onChange={this.changeText}/>
                <button type="submit" className="bttn">Search</button>
            </form>
        </Fragment>
    );
  } 
}
const mapStateToProps = state => ({
    searchKeyword: state.moviesreducer.searchKeyword,
})
export default connect(mapStateToProps, {searchMovieAction, getMoviesAction, setSearchState })(SearchForm);
