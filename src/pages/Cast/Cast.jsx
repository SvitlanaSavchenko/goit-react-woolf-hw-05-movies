import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastApi } from 'api/movies';
import CastData from '../CastData/CastData';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const castData = await getCastApi(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
        setError('Failed to fetch cast data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading cast...</p>}
      {error && <p>{error}</p>}
      {cast.length > 0 && <CastData cast={cast} />}
    </div>
  );
};

export default Cast;
