<template>
  <div class="container">
    <h1>Welcome to the Food Doctor application</h1>
    <div class="introText">
      <h3>
        This application will check your weekly water and vitamin intake and aim
        to show you where you can improve. There has never been a more important
        time to keep the body healthy!
      </h3>
      <h3>Click the button below to get started.</h3>
      <div class="btnContainer">
        <router-link to="/questions"
          ><button class="startButton">Begin</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 10vh;
}

h1 {
  text-align: center;
  padding-bottom: 1rem;
}

.introText {
  max-width: 1000px;
  margin: 0 auto;
}

.btnContainer {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.startButton {
  padding: 0.7rem 2rem;
  font-size: 20px;
}
.startButton:hover {
  cursor: pointer;
}
</style>
