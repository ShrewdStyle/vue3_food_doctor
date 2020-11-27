<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Nuts</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('nutsCounter')">-</button>
        <div class="amountNumber">{{ nutsCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('nutsCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Seeds</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('seedsCounter')">-</button>
        <div class="amountNumber">{{ seedsCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('seedsCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Vegetable Oil</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('voCounter')">-</button>
        <div class="amountNumber">{{ voCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('voCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      nutsCounter: 0,
      seedsCounter: 0,
      voCounter: 0,
    }
  },
  methods: {
    foodIncrease(val){
      this[val] += 1
    },
    foodDecrease(val){
      if (this[val] <= 0){
        return 0
      }
      else {
        this[val] -= 1
      }
    }
  },
}
</script>