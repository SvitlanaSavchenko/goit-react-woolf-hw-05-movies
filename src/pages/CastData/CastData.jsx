import React from 'react';

const CastData = ({ cast }) => (
  <div>
    <h2>Cast</h2>
    <ul>
      {cast.map(actor => (
        <div key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                : 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
            }
            alt={actor.name}
          />
          <p>Name: {actor.name}</p>
          <p>Character: {actor.character}</p>
        </div>
      ))}
    </ul>
  </div>
);

export default CastData;
