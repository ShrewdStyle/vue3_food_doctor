<template>
  <h2>Your current results are: {{ results }}</h2>
</template>

<script>
export default {
  props: ['results'],
}
</script>

// Results format

[ 6, [ { "eggs": 2 }, { "fish": 1 }, { "liver": 0 }, { "carrots": 3 }, { "sweetPotatoe": 0 }, { "redPeppers": 0 } ], [ { "peas": 0 }, { "bananas": 3 }, { "wholeGrainBread": 1 } ], [ { "oranges": 3 }, { "peppers": 2 }, { "strawberries": 0 }, { "potatoes": 0 }, { "brusselsSprouts": 0 } ], [ { "redMeat": 1 }, { "fish": 2 } ], [ { "nuts": 3 }, { "seeds": 1 }, { "vegetableOil": 1 } ], [ { "broccoli": 5 }, { "spinach": 0 } ], [ { "milk": 10 }, { "cheese": 1 }, { "yoghurt": 1 } ] ]