import React, { useState, useEffect } from 'react';

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [isDataLoaded, setIsDataLoaded]= useState(false);

  console.log("movieslist_outside")
  useEffect(function ()  {
    const fetchMovies = async () => {

      try {
    const res = await fetch("https://hoblist.com/api/movieList", {
      method: "POST",
      body: JSON.stringify({
        category: "movies",
        language: "kannada", genre: "all",
        sort: "voting",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //if (!res.ok) throw Error();
    console.log(res)
    // const { body } = await res.json();
    // console.log(body)
    setIsDataLoaded(true);
   
  } catch {
    throw Error("Failed creating your order");
  }
      // try {
      //   const response = await fetch('https://hoblist.com/api/movieList');
      //   const data = await response.json();
      //   console.log(data)
      //   setMovies(data.result);
      // } catch (error) {
      //   console.error('Error fetching movies:', error);
      // }
    };

    fetchMovies();
    console.log("movieslist")
  },[]);

  return (
    <>
   {
    isDataLoaded ?  <div>
    <h2>Movies List</h2>
    <ul>
      {movies.map((movie) => (
        <li key={movie._id}>
          <h3>{movie.title}</h3>
          <p>category: {movie.category}</p>
          <p>language: {movie.language}</p>
          
        </li>
      ))}
    </ul>
  </div> :<p>Data is loading</p>
   }
   
    </>
  );
};

export default MovieListPage;
