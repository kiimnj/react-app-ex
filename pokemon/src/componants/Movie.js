import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function Movie({key, id, title, coverImage, summary}) {
    return (
        <div key={key}>
            {/* <li key={key}> */}
            <h2>{title}</h2>
                <img src={coverImage} alt="cover"></img>
            {/* <div>Click the image !</div> */}
            <div>{summary}</div>
            {/* <a href={`/movie/{$id}`}>{title}</a> */}
            <Link to={`/movie/${id}`}>{title}</Link>
            {/* </li> */}
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number,
    title : PropTypes.string.isRequired,
    coverImage : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    //genre : PropTypes.genre.array...
}

export default Movie;