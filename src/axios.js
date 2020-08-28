import axios from "axios";

/* create a baseURL to make requests to the movie database */

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
