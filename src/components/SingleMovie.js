import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SingleMovie extends Component {
    render(){
        const {movieInfo } = this.props;
        return(
            <div className="col-md-4">
                <div className="movieCard card">
                    <div className="card-body bg-dark text-center h-100">
                        <img src={movieInfo.Poster} className="cardimg card-img-top w-100 mb-2" alt="Movie Poster"/>
                        <h5 className="text-light card-title">{movieInfo.Title}</h5>
                        <p className="text-light card-text">{movieInfo.Year}</p>
                        <p className="text-light card-text">{movieInfo.Type}</p>
                        <div class="card-footer">
                        <Link className="btn btn-primary btndetails" to={'/movie/' +movieInfo.imdbID}>More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SingleMovie