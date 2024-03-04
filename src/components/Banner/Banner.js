import React,{useEffect, useState} from 'react'
import { API_KEY,imageUrl} from '../../constants/contsants'
import axios from '../../axios';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        const getRandomMovie = async () => {
            try {
              const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week`, {
                params: {
                  api_key: API_KEY,
                  language: 'en-US',
                  page: Math.floor(Math.random() * 20) + 1, // Assuming there are 20 pages of results
                },
              });
      
              setMovie(response.data.results[0]);
            } catch (error) {
              console.error('Error fetching movie data:', error);
            }
          };
      
          getRandomMovie();
        }, []);
     
    
  return (
    <div 
    style={{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path : ""}`}}
    className='Banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_btn'>
                <button className='btn'>Play</button>
                <button className='btn'>Mylist</button>

            </div>
            <h1 className='desc'>{movie ? movie.overview : ""}
            </h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner