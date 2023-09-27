//MovieApp
import { useState, useEffect } from "react";
import Movie from './componants/Movie'

function App() {
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
    // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    // .then((response) => response.json())
    // .then((json) => {
    //   // console.log(json);
    //   setDatas(json.data.movies);
    //   console.log(json.data.movies);
    //   setIsLoading(false);
    // });
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
            title={movie.title}
            coverImage={movie.large_cover_image}
            summary={movie.summary}
          />
        // <li key={movie.id}>
        //   <h2>{movie.title}</h2>
        //     <a href={movie.url}>
        //       <img src={movie.large_cover_image} alt="cover" style={{width:'200px', height:'300px'}}></img>
        //     </a>
        //   <div>Click the image !</div>
        //   <div>{movie.summary}</div>
        // </li>
      )}</ul>
      }
    </div>
  );
}

export default App;
