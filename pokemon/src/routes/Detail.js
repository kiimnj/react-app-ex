import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail({id}) {
    // let params = useParams();
    // console.log(params);
    // let data = props.data;
    // console.log(data);


    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)).json();
        console.log(json);
    }
    useEffect(() => getMovie(), []);

    return (
        <div>
            <h1>Movie Detail</h1>
            {/* <div>{json.movies.title}</div>
            {datas.map((movie) => 
          <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            coverImage={movie.medium_cover_image}
            summary={movie.summary}
          /> */}
      {/* )} */}
        </div>
    );
}
export default Detail;