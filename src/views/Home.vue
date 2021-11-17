<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="recipes-new">
      <form v-on:submit.prevent="createMovie()">
        <h1>New Movie!</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Title:</label>
          <input type="text" v-model="newMovieParams.title" />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" v-model="newMovieParams.year" />
        </div>
        <div>
          <label>Plot:</label>
          <input type="text" v-model="newMovieParams.plot" />
        </div>
        <div>
          <label>Director:</label>
          <input type="text" v-model="newMovieParams.director" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>

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
      message: "Welcome to Vue.js!",
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
    createMovie: function () {
      axios.post("/movies", this.newMovieParams).then(() => {
        this.$router.push("/");
        console.log("Movie succesfully created");
      });
    },
    showMovie: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (currentMovie) {
      axios.put("/movies/" + currentMovie.id, currentMovie).then((response) => {
        console.log("Success", response.data);
      });
    },
    destroyMovie: function (currentMovie) {
      axios.delete("movies/" + currentMovie.id).then((response) => {
        console.log("Success!", response.data);
        var index = this.movies.indexOf(currentMovie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>
