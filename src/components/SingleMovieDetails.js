import React, {Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getMovieDetails, setSearchState } from '../actions/searchActions'
import Spinner from './Spinner'

export class SingleMovieDetails extends Component {
    componentDidMount() {
        this.props.getMovieDetails(this.props.match.params.id);
        this.props.setSearchState();
      }
    render(){
        const { movieInfo, searchState } = this.props;
            let movieDetails = (
            <div className="container">
            <div class="movieDetails">
            <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img src={movieInfo.Poster} className="thumbnail" alt="Movie"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                       <div class="otherDetails">
                       <h3 className="card-title">{movieInfo.Title}</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <span class="movieData">Genre: </span> {movieInfo.Genre}
                            </li>
                            <li className="list-group-item">
                                <span class="movieData">Released: </span> {movieInfo.Released}
                            </li>
                            <li className="list-group-item">
                                <span class="movieData">Rated: </span> {movieInfo.Rated}
                            </li>
                            <li className="list-group-item">
                                <span class="movieData">IMDB Rating: </span> {movieInfo.imdbRating}
                            </li>
                            <li className="list-group-item">
                                <span class="movieData">Director: </span> {movieInfo.Director}
                            </li>
                            <li className="list-group-item">
                                <span class="movieData">Writer: </span> {movieInfo.Writer}
                            </li>
                            <li className="list-group-item">
                                <span class="movieData">Actors: </span> {movieInfo.Actors}
                            </li>
                            <li className="list-group-item">
                                <span class="movieData">About: </span><br/>
                                {movieInfo.Plot}
                            </li>
                            <a href={'https://www.imdb.com/title/' + movieInfo.imdbID}
                            target="_blank" rel="noopener noreferrer" className="btn btn-dark">View on IMDB</a>
                        </ul>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        );

        let content = searchState ? <Spinner /> : movieDetails;
        return <Fragment>{content}</Fragment>;
    }
}
const mapStateToProps = state => ({
    searchState: state.moviesreducer.searchState,
    movieInfo: state.moviesreducer.movieInfo
  });
  
  export default connect(
    mapStateToProps,
    { getMovieDetails, setSearchState }
  )(SingleMovieDetails);