import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner fetchUrl={requests.fetchTrending} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNeflixOriginals}
        largePost={true}
      />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
