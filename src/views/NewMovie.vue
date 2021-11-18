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
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Create a movie!",
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
    createMovie: function () {
      axios.post("/movies", this.newMovieParams).then(() => {
        this.$router.push("/");
        console.log("Movie succesfully created");
      });
    },
  },
};
</script>
