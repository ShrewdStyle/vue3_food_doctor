<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Peas</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('peasCounter')">-</button>
        <div class="amountNumber">{{ peasCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('peasCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Bananas</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('bananasCounter')">-</button>
        <div class="amountNumber">{{ bananasCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('bananasCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Whole Grain Bread</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('wgbCounter')">-</button>
        <div class="amountNumber">{{ wgbCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('wgbCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      peasCounter: 0,
      bananasCounter: 0,
      wgbCounter: 0,
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