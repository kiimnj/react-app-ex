//MovieApp
import { useState, useEffect } from "react";
import Movie from '../componants/Movie'

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const getDatas = async () => {
      const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
      const json = await response.json();
      setDatas(json.data.movies);
      console.log(json.data.movies);
      setIsLoading(false); 
    }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div>
      <h1>Movie app</h1>
      {isLoading
      ? <p>Loading...</p> 
      : <ul>{datas.map((movie) => 
          <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            coverImage={movie.medium_cover_image}
            summary={movie.summary}
          />
      )}</ul>
      }
    </div>
  );
}

export default Home;
