<template>
  <div class="container">
    <div id="q1" v-if="!q1Active">
      <div class="questionTitle">{{ questions[0].question }}</div>
      <div class="questionCount">(1 of 8)</div>
      <div class="options">
        <button class="optionBtn" @click="nextQuestion1A">
          {{ questions[0].answers.A }}
        </button>
        <button class="optionBtn" @click="nextQuestion1B">
          {{ questions[0].answers.B }}
        </button>
        <button class="optionBtn" @click="nextQuestion1C">
          {{ questions[0].answers.C }}
        </button>
        <button class="optionBtn" @click="nextQuestion1D">
          {{ questions[0].answers.D }}
        </button>
      </div>
    </div>
    <div id="q2" v-if="q2Active">
      <div class="questionTitle">{{ questions[1].question }}</div>
      <div class="questionCount">(2 of 8)</div>
      <div class="foodContainer" v-for="v in vitAFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecreaseA(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncreaseA(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="prevQ" @click="prevQuestion1">Back</button>
        <button class="nextQ" @click="nextQuestion2">Next</button>
      </div>
    </div>
    <div id="q3" v-if="q3Active">
      <div class="questionTitle">{{ questions[1].question }}</div>
      <div class="questionCount">(3 of 8)</div>
      <div class="foodContainer" v-for="v in vitBFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecreaseB(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncreaseB(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="prevQ" @click="prevQuestion2">Back</button>
        <button class="nextQ" @click="nextQuestion3">Next</button>
      </div>
    </div>
    <div id="q4" v-if="q4Active">
      <div class="questionTitle">{{ questions[1].question }}</div>
      <div class="questionCount">(4 of 8)</div>
      <div class="foodContainer" v-for="v in vitCFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecreaseC(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncreaseC(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="prevQ" @click="prevQuestion3">Back</button>
        <button class="nextQ" @click="nextQuestion4">Next</button>
      </div>
    </div>
    <div id="q5" v-if="q5Active">
      <div class="questionTitle">{{ questions[1].question }}</div>
      <div class="questionCount">(5 of 8)</div>
      <div class="foodContainer" v-for="v in vitDFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecreaseD(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncreaseD(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="prevQ" @click="prevQuestion4">Back</button>
        <button class="nextQ" @click="nextQuestion5">Next</button>
      </div>
    </div>
    <div id="q6" v-if="q6Active">
      <div class="questionTitle">{{ questions[1].question }}</div>
      <div class="questionCount">(6 of 8)</div>
      <div class="foodContainer" v-for="v in vitEFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecreaseE(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncreaseE(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="prevQ" @click="prevQuestion5">Back</button>
        <button class="nextQ" @click="nextQuestion6">Next</button>
      </div>
    </div>
    <div id="q7" v-if="q7Active">
      <div class="questionTitle">{{ questions[1].question }}</div>
      <div class="questionCount">(7 of 8)</div>
      <div class="foodContainer" v-for="v in vitKFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecreaseK(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncreaseK(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="prevQ" @click="prevQuestion6">Back</button>
        <button class="nextQ" @click="nextQuestion7">Next</button>
      </div>
    </div>
    <div id="q8" v-if="q8Active">
      <div class="questionTitle">{{ questions[1].question }}</div>
      <div class="questionCount">(8 of 8)</div>
      <div class="foodContainer" v-for="v in vitCalcFoods" :key="v.id">
        <div class="item">
          <div class="itemName">{{ v.name }}</div>
          <div class="itemPhoto"></div>
          <div class="amount">
            <button class="btnDecrease" @click="foodDecreaseCalc(v.id - 1)">
              -
            </button>
            <div class="amountNumber">{{ v.counter }}</div>
            <button class="btnIncrease" @click="foodIncreaseCalc(v.id - 1)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="prevQ" @click="prevQuestion7">Back</button>
        <button class="nextQ" @click="finishQuestion">Finish</button>
      </div>
    </div>
    <question-results
      v-if="resultsActive"
      :resultsWater="resultsWater"
      :resultsA="resultsA"
      :resultsB="resultsB"
      :resultsC="resultsC"
      :resultsD="resultsD"
      :resultsE="resultsE"
      :resultsK="resultsK"
      :resultsCalc="resultsCalc"
    ></question-results>
  </div>
</template>

<script>
import questionResults from "../Results";

export default {
  components: {
    questionResults,
  },
  data() {
    return {
      results: [],
      resultsWater: "",
      resultsA: "",
      resultsB: "",
      resultsC: "",
      resultsD: "",
      resultsE: "",
      resultsK: "",
      resultsCalc: "",
      q1Active: false,
      q2Active: false,
      q3Active: false,
      q4Active: false,
      q5Active: false,
      q6Active: false,
      q7Active: false,
      q8Active: false,
      resultsActive: false,

      // Questions

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

        // Question Foods
      ],
      vitAFoods: [
        {
          id: 1,
          name: "Eggs",
          counter: 0,
        },
        {
          id: 2,
          name: "Liver",
          counter: 0,
        },
        {
          id: 3,
          name: "Carrots",
          counter: 0,
        },
        {
          id: 4,
          name: "Sweet Potatoes",
          counter: 0,
        },
        {
          id: 5,
          name: "Red Peppers",
          counter: 0,
        },
      ],
      vitBFoods: [
        {
          id: 1,
          name: "Peas",
          counter: 0,
        },
        {
          id: 2,
          name: "Bananas",
          counter: 0,
        },
        {
          id: 3,
          name: "Whole grain bread",
          counter: 0,
        },
      ],
      vitCFoods: [
        {
          id: 1,
          name: "Oranges",
          counter: 0,
        },
        {
          id: 2,
          name: "Peppers",
          counter: 0,
        },
        {
          id: 3,
          name: "Strawberries",
          counter: 0,
        },
        {
          id: 4,
          name: "Potatoes",
          counter: 0,
        },
        {
          id: 5,
          name: "Brussels Sprouts",
          counter: 0,
        },
      ],
      vitDFoods: [
        {
          id: 1,
          name: "Red Meat",
          counter: 0,
        },
        {
          id: 2,
          name: "Fish",
          counter: 0,
        },
      ],
      vitEFoods: [
        {
          id: 1,
          name: "Nuts",
          counter: 0,
        },
        {
          id: 2,
          name: "Seeds",
          counter: 0,
        },
        {
          id: 3,
          name: "Vegetable Oil",
          counter: 0,
        },
      ],
      vitKFoods: [
        {
          id: 1,
          name: "Broccoli",
          counter: 0,
        },
        {
          id: 2,
          name: "Spinach",
          counter: 0,
        },
      ],
      vitCalcFoods: [
        {
          id: 1,
          name: "Milk",
          counter: 0,
        },
        {
          id: 2,
          name: "Cheese",
          counter: 0,
        },
        {
          id: 3,
          name: "Yoghurt",
          counter: 0,
        },
      ],
    };
  },
  methods: {
    // Next Questions

    nextQuestion1A() {
      this.q1Active = true;
      this.q2Active = true;
      this.results.push(0);
    },
    nextQuestion1B() {
      this.q1Active = true;
      this.q2Active = true;
      this.results.push(2);
    },
    nextQuestion1C() {
      this.q1Active = true;
      this.q2Active = true;
      this.results.push(4);
    },
    nextQuestion1D() {
      this.q1Active = true;
      this.q2Active = true;
      this.results.push(6);
    },
    nextQuestion2() {
      this.q2Active = false;
      this.q3Active = true;
      this.results.push([
        { eggs: this.vitAFoods[0].counter },
        { liver: this.vitAFoods[1].counter },
        { carrots: this.vitAFoods[2].counter },
        { sweetPotatoe: this.vitAFoods[3].counter },
        { redPeppers: this.vitAFoods[4].counter },
      ]);
    },
    nextQuestion3() {
      this.q3Active = false;
      this.q4Active = true;
      this.results.push([
        { peas: this.vitBFoods[0].counter },
        { bananas: this.vitBFoods[1].counter },
        { wholeGrainBread: this.vitBFoods[2].counter },
      ]);
    },
    nextQuestion4() {
      this.q4Active = false;
      this.q5Active = true;
      this.results.push([
        { oranges: this.vitCFoods[0].counter },
        { peppers: this.vitCFoods[1].counter },
        { strawberries: this.vitCFoods[2].counter },
        { potatoes: this.vitCFoods[3].counter },
        { brusselsSprouts: this.vitCFoods[4].counter },
      ]);
    },
    nextQuestion5() {
      this.q5Active = false;
      this.q6Active = true;
      this.results.push([
        { redMeat: this.vitDFoods[0].counter },
        { fish: this.vitDFoods[1].counter },
      ]);
    },
    nextQuestion6() {
      this.q6Active = false;
      this.q7Active = true;
      this.results.push([
        { nuts: this.vitEFoods[0].counter },
        { seeds: this.vitEFoods[1].counter },
        { vegetableOil: this.vitEFoods[2].counter },
      ]);
    },
    nextQuestion7() {
      this.q7Active = false;
      this.q8Active = true;
      this.results.push([
        { broccoli: this.vitKFoods[0].counter },
        { spinach: this.vitKFoods[1].counter },
      ]);
    },
    finishQuestion() {
      this.results.push([
        { milk: this.vitCalcFoods[0].counter },
        { cheese: this.vitCalcFoods[1].counter },
        { yoghurt: this.vitCalcFoods[1].counter },
      ]);
      this.q8Active = false;
      this.resultsActive = true;

      let vitAtotal =
        this.results[1][0].eggs +
        this.results[1][1].liver +
        this.results[1][2].carrots +
        this.results[1][3].sweetPotatoe +
        this.results[1][4].redPeppers;
      let vitBtotal =
        this.results[2][0].peas +
        this.results[2][1].bananas +
        this.results[2][2].wholeGrainBread;
      let vitCtotal =
        this.results[3][0].oranges +
        this.results[3][1].peppers +
        this.results[3][2].strawberries +
        this.results[3][3].potatoes +
        this.results[3][4].brusselsSprouts;
      let vitDtotal = this.results[4][0].redMeat + this.results[4][1].fish;
      let vitEtotal =
        this.results[5][0].nuts +
        this.results[5][1].seeds +
        this.results[5][2].vegetableOil;
      let vitKtotal = this.results[6][0].broccoli + this.results[6][1].spinach;
      let vitCalctotal =
        this.results[7][0].milk +
        this.results[7][1].cheese +
        this.results[7][2].yoghurt;

      console.log("VitA : " + vitAtotal);
      console.log("VitB : " + vitBtotal);
      console.log("VitC : " + vitCtotal);
      console.log("VitD : " + vitDtotal);
      console.log("VitE : " + vitEtotal);
      console.log("VitK : " + vitKtotal);
      console.log("VitCalc : " + vitCalctotal);

      if (this.results[0] < 3) {
        this.resultsWater = "Low";
      } else {
        this.resultsWater = "Good";
      }

      if (vitAtotal < 15) {
        this.resultsA = "Low";
      } else {
        this.resultsA = "Good";
      }

      if (vitBtotal < 10) {
        this.resultsB = "Low";
      } else {
        this.resultsB = "Good";
      }

      if (vitCtotal < 10) {
        this.resultsC = "Low";
      } else {
        this.resultsC = "Good";
      }

      if (vitDtotal < 5) {
        this.resultsD = "Low";
      } else {
        this.resultsD = "Good";
      }

      if (vitEtotal < 5) {
        this.resultsE = "Low";
      } else {
        this.resultsE = "Good";
      }

      if (vitKtotal < 5) {
        this.resultsK = "Low";
      } else {
        this.resultsK = "Good";
      }

      if (vitCalctotal < 8) {
        this.resultsCalc = "Low";
      } else {
        this.resultsCalc = "Good";
      }
    },

    // Previous Questions

    prevQuestion1() {
      this.q1Active = false;
      this.q2Active = false;
      this.results.pop();
    },
    prevQuestion2() {
      this.q2Active = true;
      this.q3Active = false;
      this.results.pop();
    },
    prevQuestion3() {
      this.q3Active = true;
      this.q4Active = false;
      this.results.pop();
    },
    prevQuestion4() {
      this.q4Active = true;
      this.q5Active = false;
      this.results.pop();
    },
    prevQuestion5() {
      this.q5Active = true;
      this.q6Active = false;
      this.results.pop();
    },
    prevQuestion6() {
      this.q6Active = true;
      this.q7Active = false;
      this.results.pop();
    },
    prevQuestion7() {
      this.q7Active = true;
      this.q8Active = false;
      this.results.pop();
    },

    // Question Counters

    foodIncreaseA(val) {
      this.vitAFoods[val].counter += 1;
    },
    foodDecreaseA(val) {
      if (this.vitAFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitAFoods[val].counter -= 1;
      }
    },
    foodIncreaseB(val) {
      this.vitBFoods[val].counter += 1;
    },
    foodDecreaseB(val) {
      if (this.vitBFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitBFoods[val].counter -= 1;
      }
    },
    foodIncreaseC(val) {
      this.vitCFoods[val].counter += 1;
    },
    foodDecreaseC(val) {
      if (this.vitCFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitCFoods[val].counter -= 1;
      }
    },
    foodIncreaseD(val) {
      this.vitDFoods[val].counter += 1;
    },
    foodDecreaseD(val) {
      if (this.vitDFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitDFoods[val].counter -= 1;
      }
    },
    foodIncreaseE(val) {
      this.vitEFoods[val].counter += 1;
    },
    foodDecreaseE(val) {
      if (this.vitEFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitEFoods[val].counter -= 1;
      }
    },
    foodIncreaseK(val) {
      this.vitKFoods[val].counter += 1;
    },
    foodDecreaseK(val) {
      if (this.vitKFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitKFoods[val].counter -= 1;
      }
    },
    foodIncreaseCalc(val) {
      this.vitCalcFoods[val].counter += 1;
    },
    foodDecreaseCalc(val) {
      if (this.vitCalcFoods[val].counter <= 0) {
        return 0;
      } else {
        this.vitCalcFoods[val].counter -= 1;
      }
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 1rem 4rem;
  min-height: 100vh;
}

.questionTitle {
  margin-bottom: 3rem;
  font-size: 26px;
  padding-top: 15vh;
}

.options {
  padding: 2rem;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
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

.btnDecrease,
.btnIncrease {
  width: 20px;
}

.btnDecrease:hover,
.btnIncrease:hover {
  cursor: pointer;
}

.prevQ,
.nextQ {
  margin: 0 1rem;
  display: inline-block;
  padding: 1rem 2.8rem;
  border: solid 3px var(--pirmaryColour);
  background-color: var(--pirmaryColour);
  cursor: pointer;
  color: black;
  font-size: 1.2rem;
  transition: all 0.3s;
  outline: none;
  border-radius: 1000px;
}

.prevQ:hover,
.nextQ:hover {
  cursor: pointer;
  background-color: transparent;
  transform: scale(1.1) perspective(1px);
}
</style>
