import React, { useEffect, useState } from 'react';
import { getTrendingMoviesApi } from '../../api/movies.js';
import MovieList from 'components/MovieList/MovieList.jsx';
import styles from './Home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getTrendingMoviesApi();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setError('Failed to fetch trending movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <div>
          <h3 className={styles.heading}>Trending Today</h3>
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
};

export default Home;
