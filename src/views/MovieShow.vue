<template>
  <div class="movie-show">
    <h1>Movie Info:</h1>
    <p>Title: {{ movie.title }}</p>
    <p>Year: {{ movie.year }}</p>
    <p>Plot: {{ movie.plot }}</p>
    <p>Director: {{ movie.director }}</p>
    <p>English: {{ movie.english }}</p>
    <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit this movie</router-link>
    |
    <router-link to="/movieindex">Back to all movies</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>
