<template>
  <div class="movie-index">
    <h1>{{ message }}</h1>
    <div>
      <button>Sort Alphabetically</button>
    </div>
    Search by name:
    <input type="text" v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="movie in movies" :key="movie.id">{{ movie.title }}</option>
    </datalist>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')" :key="movie.id">
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
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
