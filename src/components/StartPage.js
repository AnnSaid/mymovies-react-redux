import React from 'react'

function StartPage(){
    return(
        <div className="container-fluid startpage">
           <p>This is a React with Redux Responsive Web App</p>
           <p><a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">Using The Open Movie Database (OMDb API)</a></p>
           <p className="followlinks">
            <a href="https://www.linkedin.com/in/annsaid/" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin fa-2x follow"></span></a>
            <a href="https://www.youtube.com/annsaid" target="_blank" rel="noopener noreferrer"><span className="fab fa-youtube-square fa-2x follow"></span></a>
            <a href="https://twitter.com/AnnSaid" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter-square fa-2x follow"></span></a>
            <a href="https://www.instagram.com/l.annspace/" target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram fa-2x follow"></span></a>
            <a href="https://www.behance.net/annsaid" target="_blank" rel="noopener noreferrer"><span className="fab fa-behance-square fa-2x follow"></span></a>
            <a href="https://github.com/annSaid/" target="_blank" rel="noopener noreferrer"><span className="fab fa-github-square fa-2x follow"></span></a>
           </p>
        </div>
    )
} 

export default StartPage
