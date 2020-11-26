<template>
  <div class="container">
    <div id="q1">
      <h1>{{ questions[0].question }}</h1>
      <div class="options">
        <button class="optionBtn">{{ questions[0].answers.A }}</button>
        <button class="optionBtn">{{ questions[0].answers.B }}</button>
        <button class="optionBtn">{{ questions[0].answers.C }}</button>
        <button class="optionBtn">{{ questions[0].answers.D }}</button>
      </div>
    </div>
    <div id="q2">
      <h1></h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      questions: [
        {
          id: 1,
          question: "On a daily basis how many glasses of water do you drink?",
          answers: {
            A: "0 glasses",
            B: "1-2 glasses",
            C: "3-4 glasses",
            D: "5+ glasses",
          },
        },
        {
          id: 2,
          question: "",
        },
      ],
    };
  },
  methods: {
    checkData() {
      console.log(this.questions[0].question);
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 12vh;
}

.options {
  padding: 2rem;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
}

.optionBtn {
  padding: 0.7rem 1.5rem;
  width: 150px;
  margin: 1rem;
}
.optionBtn:hover {
  cursor: pointer;
}
</style>
