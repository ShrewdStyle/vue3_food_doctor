<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Eggs</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('eggCounter')">
          -
        </button>
        <div class="amountNumber">{{ eggCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('eggCounter')">
          +
        </button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Fish</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('fishCounter')">
          -
        </button>
        <div class="amountNumber">{{ fishCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('fishCounter')">
          +
        </button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Liver</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('liverCounter')">
          -
        </button>
        <div class="amountNumber">{{ liverCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('liverCounter')">
          +
        </button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Carrots</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('carrotsCounter')">
          -
        </button>
        <div class="amountNumber">{{ carrotsCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('carrotsCounter')">
          +
        </button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Sweet Potatoes</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('spCounter')">
          -
        </button>
        <div class="amountNumber">{{ spCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('spCounter')">
          +
        </button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Red Peppers</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('rpCounter')">
          -
        </button>
        <div class="amountNumber">{{ rpCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('rpCounter')">
          +
        </button>
      </div>
    </div>
    <div class="buttons">
      <button class="prevQ">Back</button>
      <button class="nextQ">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questions"],
  data() {
    return {
      eggCounter: 0,
      fishCounter: 0,
      liverCounter: 0,
      carrotsCounter: 0,
      spCounter: 0,
      rpCounter: 0,
    };
  },
  methods: {
    foodIncrease(val) {
      this[val] += 1;
    },
    foodDecrease(val) {
      if (this[val] <= 0) {
        return 0;
      } else {
        this[val] -= 1;
      }
    },
  },
};
</script>
