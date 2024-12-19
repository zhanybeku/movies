const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <div
      className="relative h-full w-full object-cover rounded-md overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/30 to-transparent">
        <div className="absolute bottom-10 w-full text-center text-white text-3xl font-black px-2">
          {movie.title}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
