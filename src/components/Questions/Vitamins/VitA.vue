<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Eggs</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease">-</button>
        <div class="amountNumber">{{ foodQ }}</div>
        <button class="btnIncrease" @click="foodIncrease">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Cheese</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease">-</button>
        <div class="amountNumber">{{ foodQ }}</div>
        <button class="btnIncrease" @click="foodIncrease">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions', 'foodQ'],
  methods: {
    foodIncrease(){
      this.$emit('food-increase')
    },
    foodDecrease(){
      this.$emit('food-decrease')
    }
  },
}
</script>