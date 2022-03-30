const apiKey = "dafcbbeaa33a129aaea70833b1816beb";

const requests = {
  fetchTrending: `/trending/all/week?region=en-US&api_key=${apiKey}`,
  fetchNeflixOriginals: `/discover/tv?with_networks=213&api_key=${apiKey}`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}`,
  fetchActionMovies: `/discover/movie?with_genres=28&api_key=${apiKey}`,
  fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${apiKey}`,
  fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${apiKey}`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${apiKey}`,
  fetchDocumentaries: `/discover/movie?with_genres=99&api_key=${apiKey}`,
};

export default requests;
