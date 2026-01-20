import { Link } from "react-router-dom";
import './../style/Home.css'
import bg from "./../assets/bg.jpeg"

function Home() {
    return (
        <div id="mainContainerHome" className="grid lg:grid-cols-1 gap-12 items-center">
            {/* <img src = {bg} /> */}
            {/* <h1>Don't know what to see?</h1> */}
            {/* <div className="grid lg:grid-cols-1 gap-12 items-center"> */}
                <div id="content">
                        <div className="text-7xl font-bold text-accent" id="contentTitle">Can't pick a movie?</div>
                        <Link to="/RandoMovie/movies" id="toMovies" className="linkItem font-bold"><button id="moviesButton">Find one!!</button></Link>
                        <h2 id="contentBody" className="text-3xl font-semibold">You've come to the right place! </h2>
                        <p>With just a few clicks, you can get movie suggestions based on your preferred genres and language</p>
                    
                </div>
                {/* <div> */}
                    {/* <h2>just select the language and the genres you have in mind and we'll take care of the rest!!</h2> */}
                    {/* try the random movie generator now! */}
                    {/* <Link to="/RandoMovie/movies" id="toMovies"><button>Find a Movie!</button></Link> */}
                {/* </div> */}
            {/* </div> */}
        </div>
    );
}

export default Home;