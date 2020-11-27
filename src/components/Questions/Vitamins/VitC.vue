<template>
  <h1>{{ questions[1].question }}</h1>
  <div class="foodContainer">
    <div class="item">
      <div class="itemName">Oranges / Orange Juice</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('orangesCounter')">-</button>
        <div class="amountNumber">{{ orangesCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('orangesCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Peppers</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('peppersCounter')">-</button>
        <div class="amountNumber">{{ peppersCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('peppersCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Strawberries</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('strawberriesCounter')">-</button>
        <div class="amountNumber">{{ strawberriesCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('strawberriesCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Potatoes</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('potatoesCounter')">-</button>
        <div class="amountNumber">{{ potatoesCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('potatoesCounter')">+</button>
      </div>
    </div>
    <div class="item">
      <div class="itemName">Brussels Sprouts</div>
      <div class="itemPhoto"></div>
      <div class="amount">
        <button class="btnDecrease" @click="foodDecrease('bsCounter')">-</button>
        <div class="amountNumber">{{ bsCounter }}</div>
        <button class="btnIncrease" @click="foodIncrease('bsCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {
      orangesCounter: 0,
      peppersCounter: 0,
      strawberriesCounter: 0,
      potatoesCounter: 0,
      bsCounter: 0,
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