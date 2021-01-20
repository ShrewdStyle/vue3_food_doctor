<template>
  <div class="container">
    <h1 class="introTitle">Welcome to the Food Doctor application</h1>
    <div class="introContainer">
      <div class="introText">
        <h3>
          There has never been a more important time to keep the body healthy!
          This application will check your weekly water and vitamin intake and
          aim to show you where you can improve.
        </h3>
        <br />
        <h3>Click the button below to get started.</h3>
        <div class="btnContainer">
          <router-link to="/questions"
            ><button class="btnStart">Start</button></router-link
          >
        </div>
      </div>
      <div class="introPhotos">
        <img id="image1" src="../assets/image1.png" />
        <img id="image2" src="../assets/image2.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}

.introContainer {
  display: flex;
}

.introTitle {
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 10vh;
  margin-bottom: 3rem;
}

.introText {
  margin: 2rem auto;
  text-align: left;
  padding: 2rem 4rem;
  flex: 70%;
}

.introPhotos {
  flex: 30%;
}

.btnContainer {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.btnStart {
  display: inline-block;
  padding: 1.2rem 3rem;
  border: solid 3px var(--pirmaryColour);
  background-color: var(--pirmaryColour);
  cursor: pointer;
  color: black;
  font-size: 1.4rem;
  transition: all 0.3s;
  outline: none;
  border-radius: 1000px;
}
.btnStart:hover {
  background-color: transparent;
  transform: scale(1.1) perspective(1px);
}

#image1 {
  position: relative;
  width: 300px;
}
#image2 {
  position: relative;
  width: 300px;
}
</style>
