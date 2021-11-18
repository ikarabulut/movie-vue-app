<template>
  <div class="movie-index">
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" :key="movie.id">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.director }}</p>
      <router-link :to="`/movieshow/${movie.id}`">
        <a class="btn btn-primary">More info</a>
      </router-link>
    </div>
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
