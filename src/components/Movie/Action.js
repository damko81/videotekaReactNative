import { useEffect, useState } from "react";
import { api } from "../../config/api";


function createMovieMobile(Movie){

    var movie = Movie;
    var genre = movie.genre === null ? '': movie.genre.toLowerCase();
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

function createMovieBE(Movie){

    var movie = Movie;
    var genre = movie.genre === null ? '': movie.genre.toLowerCase();
    var genreTmp='';

    if(genre.includes('sci')){
        genreTmp='Sci-Fi'; 
    }
    else if (genre.includes('hor')){
        genreTmp='Horror'; 
    }
    else if (genre.includes('adv')){
        genreTmp='Adventure'; 
    }
    else if (genre.includes('drm')){
        genreTmp='Drama'; 
    }
    else if (genre.includes('act')){
        genreTmp='Action'; 
    }

    const movieBE={
        id:movie.id,
        name:movie.name,
        description:movie.description,
        rating:movie.rating,
        director:movie.director,
        stars:movie.stars,
        duration:movie.duration,
        disc:movie.disc,
        genre:genreTmp,
        releaseDate:movie.date,
        url:'',
        imageSrcDec:'',
        imageSrc:movie.uri
    }
    return movieBE;
}

function mapMovieParamMobile(movies){

    let moviesAndr = [];

    movies.forEach(function(Movie) {
        var movie = createMovieMobile(Movie);
        moviesAndr.push(movie);
    });

    return moviesAndr;
}

function mapMovieParamBE(movieData){
    return createMovieBE(movieData);
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

  export const updateMovie = async (movieData) => {

    movie = mapMovieParamBE(movieData);
    const res= await api.put('/movie/update',movie);
    return res;
  };

  export const createMovie = async (movieData) => {

    movie = mapMovieParamBE(movieData);
    const res= await api.post('/movie/add',movie);
    return res;
  };
  
  export const loadMovies = async (disc) => {
    var discTmp = disc.replace(/\\/g, '!');
    const res= await api.post(`/movie/mobileLoad/${discTmp}`)
    return res;
  };

  export const deleteMovieByDisc = async (disc) => {
    var discTmp = disc.replace(/\\/g, '!');
    const res= await api.delete(`/movie/deleteMovieByDisc/${discTmp}`)
    return res;
  };

  export const deleteMovie = async (id) => {
    const res= await api.delete(`/movie/delete/${id}`);
    return res;
  };

  