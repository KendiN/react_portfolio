import React, {useEffect, useState} from "react";
import axios from "axios";


const Jokes = () => {

    const [jokes, setJokes] = useState()

    useEffect(()=>{
        const fetchData = async() => {
           const joke = await axios.get("https://api.chucknorris.io/jokes/random")
            setJokes(joke.data.value)
        }
        fetchData()
    }, []);

    return (
        <section id="jokes">
            <h1>Joke of the day: </h1>
            <p>{jokes}</p>
        </section>
    );
}

export default Jokes;