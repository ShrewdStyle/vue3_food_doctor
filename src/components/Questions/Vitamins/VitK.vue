<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Broccoli</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('broccoliCounter')">-</button>
        <div class="amountNumber">{{ broccoliCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('broccoliCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Spinach</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('spinachCounter')">-</button>
        <div class="amountNumber">{{ spinachCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('spinachCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      broccoliCounter: 0,
      spinachCounter: 0,
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