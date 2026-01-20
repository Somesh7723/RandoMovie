import "./../style/Directions.css"

function Directions(){
    return (
        <div id="mainContainerDirections">
            <h1 id="titleDirections" className="text-bold">How to Use This RandoMovie</h1>
            <div id="bodyDirections">
                <div className="steps">
                    <div className="stepsHeading">Step 1: Set Your Preferences</div>
                    <div className="stepsBody">
                        <div className="stepsDesc">Head over to the Movies page</div>
                        <div className="stepsBodyPoints">
                        Choose your favorite genres – Love drama? Prefer action? No judgment (okay, maybe a little).
                        </div>
                        <div className="stepsBodyPoints">
                        Pick your language(s) – Multilingual movie nights? We got you.
                        </div>
                    </div>
                </div>
                <div className="steps">
                    <div className="stepsHeading">Step 2: Give parameters to the Randomness</div>
                    <div className="stepsBody">
                        <div className="stepsDesc"> Head over to the Movies page</div>
                        <div className="stepsBodyPoints">
                        Hit that big shiny button (okay, it's not shiny, but you get the idea).
                        </div>
                        <div className="stepsBodyPoints">
                        We’ll summon a movie from the mystical TMDB realms that fits your taste.
                        </div>
                        <div className="stepsBodyPoints">
                        A random movie appears! It’s like roulette... but for Netflix.
                        </div>
                    </div>
                </div>
                <div className="steps">
                    <div className="stepsHeading">Step 3: Check the Details</div>
                    <div className="stepsBody">
                    <div className="stepsDesc"> You’ll see</div>
                        <div className="stepsBodyPoints">
                        Poster (unless the movie's shy, then you'll see a placeholder)
                        </div>
                        <div className="stepsBodyPoints">
                        Overview (if it's too long, we trim it — because no one likes TL;DRs)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directions;