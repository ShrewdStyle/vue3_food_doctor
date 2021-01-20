<template>
  <spinner :start="isLoading.val" />
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/Layout/Nav";
import Spinner from "./UI/Spinner/Spinner";
export default {
  components: {
    NavBar,
    Spinner,
  },
  data() {
    return {
      isLoading: {
        val: false,
      },
    };
  },
  provide() {
    return {
      mySpinner: this.isLoading,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  margin: 0;
  line-height: 1.8;
}

:root {
  --pirmaryColour: #33ff66;
}

.optionBtn {
  padding: 0.7rem 1.5rem;
  width: 150px;
  margin: 1rem;
}
.optionBtn:hover {
  cursor: pointer;
  background-color: var(--pirmaryColour);
  border: 1px solid green;
  transition: all 0.7s;
}
</style>
