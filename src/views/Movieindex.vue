<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div v-for="movie in movies" :key="movie.id">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.director }}</p>
      <button v-on:click="showMovie(movie)">More Info</button>
    </div>
    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info:</h1>
        <p>
          Title:
          <input type="text" v-model="currentMovie.title" />
        </p>
        <p>
          year:
          <input type="text" v-model="currentMovie.year" />
        </p>
        <p>
          Plot:
          <input type="text" v-model="currentMovie.plot" />
        </p>
        <p>
          Director:
          <input type="text" v-model="currentMovie.director" />
        </p>
        <p>
          English:
          <input type="text" v-model="currentMovie.english" />
        </p>
        <button v-on:click="updateMovie(currentMovie)">Update Movie</button>
        <button v-on:click="destroyMovie(currentMovie)">Delete</button>
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All movies!",
      movies: [],
      newMovieParams: {},
      errors: [],
      currentMovie: {},
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        this.movies = response.data;
        console.log("All Movies:", response.data);
      });
    },
  },
};
</script>
