<template>
  <div class="home">
    <h1>{{ message }}</h1>
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
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Edit Movie!",
      movies: [],
      newMovieParams: {},
      errors: [],
      currentMovie: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("Movie Info:", response.data);
      this.currentMovie = response.data;
    });
  },
  methods: {
    updateMovie: function (currentMovie) {
      axios.put("/movies/" + currentMovie.id, currentMovie).then((response) => {
        console.log("Success", response.data);
        this.$router.push(`/movieshow/${response.data.id}`);
      });
    },
    destroyMovie: function (currentMovie) {
      axios.delete("movies/" + currentMovie.id).then((response) => {
        console.log("Success!", response.data);
        var index = this.movies.indexOf(currentMovie);
        this.movies.splice(index, 1);
        this.$router.push("/movieindex");
      });
    },
  },
};
</script>
