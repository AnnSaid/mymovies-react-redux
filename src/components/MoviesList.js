import React, { Component } from 'react'
import {connect} from 'react-redux'
import SingleMovie from './SingleMovie' 
import NotFound from './NotFound' 

export class MoviesList extends Component {
    render(){
        const {searchResult} = this.props;
        let info = '';
        info =
        searchResult.Response == "True" ? 
        searchResult.Search.map((movieInfo, i) => <SingleMovie key ={i} movieInfo={movieInfo}/>):
        null;

        if(info != null){
         return(
                <div className="row movielist">
                        {info}
                </div>
            )
        }
        else{
            return(
                <div className="row">
                          <NotFound />
                </div>
                )
        }
    }
        }
  
const mapStateToProps = state => ({
    searchResult: state.moviesreducer.searchResult,
  });
export default connect(mapStateToProps)(MoviesList);
