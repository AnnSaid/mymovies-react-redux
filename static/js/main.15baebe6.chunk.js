(this["webpackJsonpmovies-finder"]=this["webpackJsonpmovies-finder"]||[]).push([[0],{27:function(e,a){e.exports={APIKey:"98b6b38a"}},42:function(e,a,t){e.exports=t(72)},47:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),s=(t(47),t(5)),o=t(6),i=t(8),m=t(7),u=t(9),p=t(12),f=t(17),h=t(16);var d=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(f.b,{className:"navbar-brand name",to:"/"},"MyMovie"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://www.imdb.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"nav-link fab fa-imdb fa-5x"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"nav-link fab fa-font-awesome fa-5x"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"nav-link fab fa-bootstrap fa-5x"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{class:"iconify","data-icon":"simple-icons:redux","data-inline":"false"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"nav-link fab fa-react fa-5x"})))))))},b=t(26),E=t.n(b),v=t(27),g=function(){return{type:"SSTATE"}},N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).changeText=function(e){t.props.searchMovieAction(e.target.value)},t.submitSearch=function(e){e.preventDefault(),""!==t.props.searchKeyword&&(t.props.getMoviesAction(t.props.searchKeyword),t.props.setSearchState())},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"searchForm",onSubmit:this.submitSearch},r.a.createElement("h2",{className:"formhead"},"Search your favourite Movies and TV Series "),r.a.createElement("input",{type:"text",className:"input-search",placeholder:"Enter the Movie or TV Series",onChange:this.changeText}),r.a.createElement("button",{type:"submit",className:"bttn"},"Search")))}}]),a}(n.Component),w=Object(p.b)((function(e){return{searchKeyword:e.moviesreducer.searchKeyword}}),{searchMovieAction:function(e){return function(a){a({type:"SEARCH MOVIE",payload:e})}},getMoviesAction:function(e){return function(a){E.a.get("https://www.omdbapi.com/?apikey=".concat(v.APIKey,"&s=").concat(e)).then((function(e){return a({type:"GET_MOVIES",payload:e.data})})).catch((function(e){return console.log(e)}))}},setSearchState:g})(N),y=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.movieInfo;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"movieCard card"},r.a.createElement("div",{className:"card-body bg-dark text-center h-100"},r.a.createElement("img",{src:e.Poster,className:"cardimg card-img-top w-100 mb-2",alt:"Movie Poster"}),r.a.createElement("h5",{className:"text-light card-title"},e.Title),r.a.createElement("p",{className:"text-light card-text"},e.Year),r.a.createElement("p",{className:"text-light card-text"},e.Type),r.a.createElement("div",{class:"card-footer"},r.a.createElement(f.b,{className:"btn btn-primary btndetails",to:"/movie/"+e.imdbID},"More Details")))))}}]),a}(n.Component);var O=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("p",{className:"notfound"},"Not Found ... Search Again!"))},S=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e,a=this.props.searchResult;return null!=(e="True"==a.Response?a.Search.map((function(e,a){return r.a.createElement(y,{key:a,movieInfo:e})})):null)?r.a.createElement("div",{className:"row movielist"},e):r.a.createElement("div",{className:"row"},r.a.createElement(O,null))}}]),a}(n.Component),j=Object(p.b)((function(e){return{searchResult:e.moviesreducer.searchResult}}))(S);var k=function(){return r.a.createElement("div",{className:"container-fluid startpage"},r.a.createElement("p",null,"This is a React with Redux Responsive Web App"),r.a.createElement("p",null,r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer"},"Using The Open Movie Database (OMDb API)")),r.a.createElement("p",{className:"followlinks"},r.a.createElement("a",{href:"https://www.linkedin.com/in/annsaid/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"fab fa-linkedin fa-2x follow"})),r.a.createElement("a",{href:"https://www.youtube.com/annsaid",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"fab fa-youtube-square fa-2x follow"})),r.a.createElement("a",{href:"https://twitter.com/AnnSaid",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"fab fa-twitter-square fa-2x follow"})),r.a.createElement("a",{href:"https://www.instagram.com/l.annspace/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"fab fa-instagram fa-2x follow"})),r.a.createElement("a",{href:"https://www.behance.net/annsaid",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"fab fa-behance-square fa-2x follow"})),r.a.createElement("a",{href:"https://github.com/annSaid/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"fab fa-github-square fa-2x follow"}))))};var x=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("span",{className:"fas fa-spinner fa-2x",style:{color:"#FFF",display:"block",margin:"auto"}}))},D=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.searchState,t=e.searchResult;return r.a.createElement("div",{className:"container"},r.a.createElement(w,null),a?r.a.createElement(x,null):""==t?r.a.createElement(k,null):r.a.createElement(j,null))}}]),a}(n.Component),M=Object(p.b)((function(e){return{searchState:e.moviesreducer.searchState,searchResult:e.moviesreducer.searchResult}}))(D);var R=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"developedby"},"Developed by: ",r.a.createElement("span",{className:"ann"},"Ann S. Abdelwahed")," using ReactJS with Redux \xa9 2020")))},I=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.getMovieDetails(this.props.match.params.id),this.props.setSearchState()}},{key:"render",value:function(){var e=this.props,a=e.movieInfo,t=e.searchState,c=r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"movieDetails"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a.Poster,className:"thumbnail",alt:"Movie"}))),r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{class:"otherDetails"},r.a.createElement("h3",{className:"card-title"},a.Title),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"Genre: ")," ",a.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"Released: ")," ",a.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"Rated: ")," ",a.Rated),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"IMDB Rating: ")," ",a.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"Director: ")," ",a.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"Writer: ")," ",a.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"Actors: ")," ",a.Actors),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{class:"movieData"},"About: "),r.a.createElement("br",null),a.Plot),r.a.createElement("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark"},"View on IMDB"))))))),l=t?r.a.createElement(x,null):c;return r.a.createElement(n.Fragment,null,l)}}]),a}(n.Component),A=Object(p.b)((function(e){return{searchState:e.moviesreducer.searchState,movieInfo:e.moviesreducer.movieInfo}}),{getMovieDetails:function(e){return function(a){E.a.get("https://www.omdbapi.com/?apikey=".concat(v.APIKey,"&i=").concat(e)).then((function(e){return a({type:"GET_MOVIE",payload:e.data})})).catch((function(e){return console.log(e)}))}},setSearchState:g})(I),T=t(15),_=t(40),C=t(41),K=t(19),V={searchKeyword:"",searchResult:[],searchState:!1,movieInfo:[]},F=Object(T.combineReducers)({moviesreducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH MOVIE":return Object(K.a)({},e,{searchKeyword:a.payload,searchState:!1});case"GET_MOVIES":return Object(K.a)({},e,{searchResult:a.payload,searchState:!1});case"GET_MOVIE":return Object(K.a)({},e,{movieInfo:a.payload,searchState:!1});case"SSTATE":return Object(K.a)({},e,{searchState:!0});default:return e}}}),P=[_.a],G=Object(T.createStore)(F,{},Object(C.composeWithDevTools)(T.applyMiddleware.apply(void 0,P))),W=(t(70),t(71),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{store:G},r.a.createElement(f.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement(h.a,{exact:!0,path:"/",component:M}),r.a.createElement(h.a,{exact:!0,path:"/movie/:id",component:A}),r.a.createElement(R,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.15baebe6.chunk.js.map