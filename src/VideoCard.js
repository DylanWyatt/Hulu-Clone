import React, { forwardRef } from "react";
import "./VideoCard.css";
import ThumbUpSharp from "@material-ui/icons/ThumbUpSharp";
import TextTruncate from "react-text-truncate";

const VideoCard = forwardRef(({ movie }, ref) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />

      <h2>{movie.title || movie.original_name}</h2>

      <p className="videoCard__stats">
        {movie.media_type && movie.media_type}
        {movie.release_date || movie.first_air_date}
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
