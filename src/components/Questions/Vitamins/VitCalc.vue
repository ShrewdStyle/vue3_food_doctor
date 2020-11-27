<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Milk</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('milkCounter')">-</button>
        <div class="amountNumber">{{ milkCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('milkCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Cheese</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('cheeseCounter')">-</button>
        <div class="amountNumber">{{ cheeseCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('cheeseCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Yoghurt</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('yoghurtCounter')">-</button>
        <div class="amountNumber">{{ yoghurtCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('yoghurtCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      milkCounter: 0,
      cheeseCounter: 0,
      yoghurtCounter: 0,
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