import { useState, useEffect } from 'react';
import "./../style/Parameters.css";
import imgTemplate from "./../assets/imgTemplate.png";

function Parameters() {
    const [list, setList] = useState([
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [lang, setLang] = useState([
        {
            "iso_639_1": "xx",
            "english_name": "No Language",
            "name": "No Language"
        },
        {
            "iso_639_1": "te",
            "english_name": "Telugu",
            "name": "తెలుగు"
        },
        {
            "iso_639_1": "en",
            "english_name": "English",
            "name": "English"
        },
        {
            "iso_639_1": "hi",
            "english_name": "Hindi",
            "name": "हिन्दी"
        },
        {
            "iso_639_1": "ta",
            "english_name": "Tamil",
            "name": "தமிழ்"
        },
        {
            "iso_639_1": "ml",
            "english_name": "Malayalam",
            "name": ""
        },
        {
            "iso_639_1": "kn",
            "english_name": "Kannada",
            "name": "?????"
        },
    ]);
    const [selectedLang, setSelectedLang] = useState("");

    const [content, setContent] = useState(null);
    const [test, setTest] = useState([]);

    const [count, setCount] = useState(0);
    const [repeat, setRepeat] = useState([]);

    const [randPageNumbers, setRandomPageNumber] = useState([]);
    const [hs, setHs] = useState(new Set());

    const [tempMovies, setTempMovies] = useState([]);
    const [movies, setMovies] = useState([]);


    const API_KEY = '511bb625acd4097a048afed6c84c6fd1';
    const BASE_URL = 'https://api.themoviedb.org/3';
    

    //For fetching GENRES & LANGUAGES.
    // useEffect(() => {
    //     const fetchData = async() => {
    //         const urlG = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&include_adult=false&include_video=true&language=en`;
    //         const urlL = `${BASE_URL}/configuration/languages?api_key=${API_KEY}`;

    //         try {
    //             const responseGenre = await fetch(urlG);
    //             const dataGenre = await responseGenre.json();
    //             const responseLang = await fetch(urlL);
    //             const dataLang = await responseLang.json();
                
    //             setList(dataGenre.genres || []); // Update state only if genres exist
    //             setLang(dataLang);

    //         } catch (error) {
    //             console.error("Error fetching genres:", error);
    //             setList([]); // Handle error case
    //         }
    //     };

    //     fetchData(); // Call the function inside useEffect
    // }, []);

    //For getting movies everytime the GENRE/LANGUAGE is changed -> tempMovies.
    useEffect(() => {
        const fetchPageNumbers = async() => {
            const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&with_original_language=${selectedLang}&with_genres=${selectedGenres}`;
            try{
                const response = await fetch(url);
                const data = await response.json();
                setTempMovies([data]);

                // console.log("DATA: ", data);
                // console.log('DATA[0]: ', data[1]);
            }catch(e){console.log(e);}
            setHs(new Set());
        };
        fetchPageNumbers();
    }, [selectedGenres, selectedLang])

    //For setting the randomPages list. We use this to fetch the final movies list.
    useEffect(() => {
        const setRandPages = () => {
            // const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=true&with_original_language=${selectedLang}&with_genres=${selectedGenres}&page=${i}`;
            try{
                const tempMoviesBuffer = tempMovies[0];
                console.log("tempMovies: ", tempMovies);
                if(tempMoviesBuffer !== undefined){
                    if(tempMoviesBuffer.total_pages == 1)   setRandomPageNumber([1]);
                    else{
                        if(tempMoviesBuffer.total_pages > 2){
                            setRandomPageNumber([1, getRandomNumbers(2, 2, tempMoviesBuffer.total_pages)]);
                        }
                        else    setRandomPageNumber([1, 2]);
                    }
                    // console.log("tempMovies: ", tempMoviesBuffer);
                    // console.log("tempMovies Length: ", tempMoviesBuffer.total_pages)
                    
                }
            }catch(e){console.log(e)}
        };

        setRandPages();
    }, [tempMovies])

    useEffect(() => {
        const moviesList = async() => {
            const movieResults = [];
            for(let i of randPageNumbers.flat()){
                // const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=true&with_original_language=${selectedLang}&with_genres=${selectedGenres}`
                const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&with_original_language=${selectedLang}&with_genres=${selectedGenres}&page=${i}`;
                try{
                    const response = await fetch(url);
                    const data = await response.json();
                    // setMovies([...movies, [data.results]]);
                    if (data.results) {
                        movieResults.push(...data.results); // Flatten results
                    }
                    // console.log(data.results);
                }catch(e){console.log(e);}
                // console.log("i: ",i);

                setMovies((prevMovies) => [...movieResults]); 
            }
            // console.log("selectedlang: ",selectedLang);

            // const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=true&with_original_language=${selectedLang}&with_genres=${selectedGenres}&page=${19}`;
            // try{
            //     const response = await fetch(url);
            //     const data = await response.json();
            //     if(data.results){
            //         movieResults.push(...data.results);
            //     }
            // }catch(e){console.log(e)}
            // setMovies((prevMovies) => [...movieResults]);
        }
        moviesList();
    }, [randPageNumbers])

    function getRandomNumbers(count, min, max) {
        const uniqueNumbers = new Set();
        while (uniqueNumbers.size < count) {
            uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        // console.log("random numbers generated: ", [...uniqueNumbers]);
        return [...uniqueNumbers]; // Convert Set to Array
    }

    function handleCheckboxChange(e) {
        setSelectedGenres(prevSelectedGenres => {
            if (e.target.checked) return [...prevSelectedGenres, e.target.value];
            else    return prevSelectedGenres.filter((genre) => genre !== e.target.value); 
        });
        // console.log(selectedGenres);
    }

    function handleDropdown(e) { setSelectedLang(e.target.value);}
    

    async function submitSelection() {
        // if(count<5){
            // setCount(count + 1);
            // console.log("len: ",movies.length);
            let randNumber = Math.floor(Math.random() * movies.length);
            let check = true;
            let whileCount = 0;
            while(check){
                if(!hs.has(randNumber)){
                    // hs.add(randNumber);
                    setHs((prevHs) => new Set(prevHs).add(randNumber));
                    check = false;
                }
                else{
                    randNumber = Math.floor(Math.random() * movies.length);
                    if(whileCount>5) check = false;
                }
                whileCount++;
            }
            let imgURL;
            if(movies[randNumber].poster_path)  imgURL = `https://image.tmdb.org/t/p/w300${movies[randNumber].poster_path}`
            else    imgURL = imgTemplate;
            // console.log("movies.length: ",movies[0].length);
            // console.log("randPageNumbers: ",randPageNumbers);
            console.log("randNumber: ",randNumber);
            // console.log("movies[randNumber]: ",movies[randNumber]);
            // console.log("randPageNumber: "+randPageNumbers);

            setContent(
            <>
                <div>Genres: [{selectedGenres.join(", ")}]</div>
                <div>Language: {selectedLang}</div>
                <div>RandNumber: {randNumber}</div>
            </>);
            let shortDesc = "";
            const totalWords = movies[randNumber].overview;
            const wordLimit = window.innerWidth <= 768 ? 15 : 65;
            if(totalWords.length > wordLimit) shortDesc = totalWords.split(" ").slice(0, wordLimit).join(" ") + "..."; // First 100 words
            else    shortDesc = movies[randNumber].overview;
            
            setTest(
                <>
                {/* {movies[0].map(e => (
                        <li key={e.id} id="titleCard">
                            {e.title}
                        </li>
                    ))} */}
                    <div id="movie">
                        <div id="movieImg"><img src={imgURL} alt={movies[randNumber].title} /></div>
                        <div id="movieRightHalf">
                            <div id="title">
                                <div id="movieTitle">{movies[randNumber].title}</div>
                                <div id="movieRating">{movies[randNumber].vote_average}/10</div>
                            </div>
                            <div id="movieDesc">
                                {/* {showFull ? movies[randNumber].overView : shortDesc}
                                {totalWords.length > 50 && (
                                   <button onClick={toggleShowMore}>
                                        {showFull ? "Show Less" : "Show More"}
                                    </button>
                                )} */}
                                {/* {movies[randNumber].overview} */}
                                {shortDesc}
                            </div>
                        </div>
                    </div> 
                </>
            )
            
            //suggested movie:
            // console.log("MOVIES STATE: ", movies);

            // console.log("temp movies state: ",tempMovies);
        // }
        // else{
        //     setTest(
        //         <>
        //             <h1>Muskoni po</h1>
        //             <h4>Ee App chesindhe neeku select cheskovadam radhu ani</h4>
        //             <h4>Malli ekkadiki vachi ave panulu cheyyaku</h4>
        //             <h4>Echina {count} options lo choose cheskoni PO</h4>
        //         </>
        //     )
        // }

    }

    return (
        <div id="main">
            <div id="mainContainer">
                <div>
                <div className="paramTitles">Genres</div>
                <div id="inputs">
                    {list.map(genre => (
                        <label><input type='checkbox' value={genre.id} id={genre.id} onChange={e => handleCheckboxChange(e)} /> {genre.name}</label>
                    ))}
                </div>
                </div>
                <div>
                <div className="paramTitles">Languages</div>
                <div>
                    <label htmlFor="language"></label>
                    <select name="language" id='dropdownLang' onChange={e => handleDropdown(e)}>
                        {lang.map(item => (
                            <option value={item.iso_639_1}>{item.english_name}</option>
                        ))}
                    </select>
                </div>
                </div>
                <div id="buttonDiv"><button onClick={submitSelection} id="submitButton">Next</button></div>
            </div>
            {/* <div id="contentDiv">{content}</div> */}
            <div id="movieCard">{test}</div>
        </div>
    );

}

export default Parameters;