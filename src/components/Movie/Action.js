import { useEffect, useState } from "react";
import { api } from "../../config/api";


function createMovieMobile(Movie){

    var movie = Movie;
    var genre = movie.genre.toLowerCase();
    var genreTmp;

    if(genre.includes('sci-fi')){
        genreTmp='sci'; 
    }
    else if (genre.includes('horror')){
        genreTmp='hor'; 
    }
    else if (genre.includes('adventure')){
        genreTmp='adv'; 
    }
    else if (genre.includes('drama')){
        genreTmp='drm'; 
    }
    else if (genre.includes('action')){
        genreTmp='act'; 
    }

    const movieMobile={
        id:movie.id,
        name:movie.name,
        description:movie.description,
        rating:movie.rating,
        director:movie.director,
        stars:movie.stars,
        duration:movie.duration,
        disc:movie.disc,
        genre:genreTmp,
        date:movie.releaseDate,
        uri:movie.imageSrc
    }
    return movieMobile;
}

function mapMovieParamMobile(movies){

    let moviesAndr = [];

    movies.forEach(function(Movie) {
        var movie = createMovieMobile(Movie);
        moviesAndr.push(movie);
    });

    return moviesAndr;
}

export const getMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.14:8080/movie/all')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setMovies(data);
          });
      }, []);
      moviesAndr = mapMovieParamMobile(movies.sort((a, b) => a.name.localeCompare(b.name)));
      return moviesAndr;
  };

  export const deleteMovie = async (id) => {
    const res= await api.delete(`/movie/delete/${id}`);
    return res;
  };