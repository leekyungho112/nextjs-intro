import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Seo from '../Seo';

export default function Detail({ params }) {
  const [result, setResult] = useState({});
  const [title, id] = params || [];
  useEffect(() => {
    (async () => {
      const repsonse = await fetch(`/api/movies/${id}`);
      const json = await repsonse.json();
      setResult(json);
    })();
  }, [id]);
  console.log(result);
  return (
    <div>
      <Seo title={title} />
      <h4 className="title">{title}</h4>
      <div className="poster_overview">
        <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} />
        <p>{result.overview}</p>
      </div>
      <div className="info">
        <span>{result.runtime}min</span>
        <span>⭐️{result.vote_average}</span>
        <div className="genres">
          {result.genres?.map((genre) => (
            <div className="genre" key={genre.id}>
              <span>{genre.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
        }
        .poster_overview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 10px;
        }
        .poster_overview img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .poster_overview:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .poster_overview p {
          font-size: 16px;
          margin: 0;
          font-weight: bold;
        }
        .info {
          padding: 10px;
        }
        .info span {
          padding-right: 20px;
        }
        .genres {
          margin-top: 20px;
          display: flex;
        }
        .genre span {
          background-color: tomato;
          margin-right: 10px;
          padding: 5px 5px;
          border-radius: 10px;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .genre:hover span {
          color: black;
          background-color: darkgray;
        }
      `}</style>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
