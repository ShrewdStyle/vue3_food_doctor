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
      <Vit-A 
      :questions="questions"
      :foodQ="foodQuantity"
      @food-increase="increaseQty"
      @food-decrease="decreaseQty"
      ></Vit-A>
    </div>
  </div>
</template>

<script>

import VitA from './Vitamins/VitA'

export default {

  components: {
    VitA
  },
  data() {
    return {
      results: [],
      foodQuantity: 0,
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
          question: "On a weekly basis, select how many times a week you might have the foods shown below for a meal",
        },
      ],
    };
  },
  methods: {
    increaseQty() {
      // return this.foodQuantity ++
      
    },
    decreaseQty() {
      if (this.foodQuantity <= 0){
        return 0
      }
      else {
        return this.foodQuantity --
      }
    }
  },
};
</script>

<style>

.container {
  text-align: center;
  margin-top: 10vh;
  padding: 1rem 4rem;
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

.foodContainer {
  padding: 4rem;
}

.item {
  display: flex;
  padding: 1rem 0;
}

.amount {
  display: flex;
}

.amountNumber {
  padding: 0 0.5rem;
}

.itemName {
  padding: 0 .5rem;
  min-width: 150px;
}

</style>
