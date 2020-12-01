<template>
  <div class="container">
    <div id="q1" v-if="!isActive">
      <h1 class="questionTitle">{{ questions[0].question }}</h1>
      <div class="options">
        <button class="optionBtn">{{ questions[0].answers.A }}</button>
        <button class="optionBtn">{{ questions[0].answers.B }}</button>
        <button class="optionBtn">{{ questions[0].answers.C }}</button>
        <button class="optionBtn">{{ questions[0].answers.D }}</button>
      </div>
    </div>
    <div id="q2" v-if="!isActive">
      <h1 class="questionTitle">{{ questions[1].question }}</h1>
      <div class="foodContainer" v-for="v in vitAFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecrease(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncrease(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [],
      isActive: false,
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
          question:
            "On a weekly basis, select how many times a week you might have the foods shown below for a meal",
        },
      ],
      vitAFoods: [
        {
          id: 1,
          name: "Eggs",
          counter: 0,
        },
        {
          id: 2,
          name: "Fish",
          counter: 0,
        },
        {
          id: 3,
          name: "Liver",
          counter: 0,
        },
        {
          id: 4,
          name: "Carrots",
          counter: 0,
        },
        {
          id: 5,
          name: "Sweet Potatoes",
          counter: 0,
        },
        {
          id: 6,
          name: "Red Peppers",
          counter: 0,
        },
      ],
    };
  },
  methods: {
    foodIncrease(val) {
      this.vitAFoods[val].counter += 1;
    },
    foodDecrease(val) {
      if (this.vitAFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitAFoods[val].counter -= 1;
      }
    },
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 10vh;
  padding: 1rem 4rem;
}

.questionTitle {
  margin-bottom: 3rem;
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
  padding: 1rem;
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
  padding: 0 0.5rem;
  min-width: 200px;
}

.buttons {
  padding: 2rem;
}

.prevQ,
.nextQ {
  margin: 0 0.5rem;
}
</style>
