<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Red Meat</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('rmCounter')">-</button>
        <div class="amountNumber">{{ rmCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('rmCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Fish</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('fishCounter')">-</button>
        <div class="amountNumber">{{ fishCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('fishCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      rmCounter: 0,
      fishCounter: 0,
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