/*          coverImg={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
            rating={movie.rating}
            runtime={movie.runtime}
            description={movie.description_full} */
import PropTypes from "prop-types";
function DetailMovie({
  coverImg,
  title,
  genres,
  rating,
  runtime,
  description,
}) {
  return (
    <div>
      <article>
        <img src={coverImg} alt={title} />
        <h2>{title}</h2>
        <span>{`rating : ${rating} `}</span>
        <span>{` runtime : ${runtime}min`}</span>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>{description}</p>
      </article>
    </div>
  );
}
DetailMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default DetailMovie;
