<template>
  <div class="container">
    <div class="resultContainer">
      <h2 class="resultHeader">Your results are:</h2>
      <div class="resultValue">Water intake: <span :class="`${resultsWater === 'Low'?'poor-result' : 'good-result'}`">{{ resultsWater }}</span></div>
      <div class="resultValue">Vitamin A: <span :class="`${resultsA === 'Low'?'poor-result' : 'good-result'}`">{{ resultsA }}</span></div>
      <div class="resultValue">Vitamin B: <span :class="`${resultsB === 'Low'?'poor-result' : 'good-result'}`">{{ resultsB }}</span></div>
      <div class="resultValue">Vitamin C: <span :class="`${resultsC === 'Low'?'poor-result' : 'good-result'}`">{{ resultsC }}</span></div>
      <div class="resultValue">Vitamin D: <span :class="`${resultsD === 'Low'?'poor-result' : 'good-result'}`">{{ resultsD }}</span></div>
      <div class="resultValue">Vitamin E: <span :class="`${resultsE === 'Low'?'poor-result' : 'good-result'}`">{{ resultsE }}</span></div>
      <div class="resultValue">Vitamin K: <span :class="`${resultsK === 'Low'?'poor-result' : 'good-result'}`">{{ resultsK }}</span></div>
      <div class="resultValue">Calcium: <span :class="`${resultsCalc === 'Low'?'poor-result' : 'good-result'}`">{{ resultsCalc }}</span></div>
    </div>
    <div class="overview">
      <h2 class="overviewHeader">
        The descriptions below show the importance of each vitamin and how they
        help your body.
      </h2>
      <div class="vitDesc">
        <span class="vitSpan">Vitamin A</span>, also known as retinol, has several important functions. These
        include:
        <ul>
          <li>
            Helping your body's natural defence against illness and infection (the
            immune system) work properly
          </li>
          <li>Helping vision in dim light</li>
          <li>
            Keeping skin and the lining of some parts of the body, such as the
            nose, healthy
          </li>
        </ul>
        <div class="vitFoods">Good sources of vitamin A include: cheese, eggs, liver, oily fish and low-fat spreads</div>
      </div>
      <div class="vitDesc">
        <span class="vitSpan">Vitamin B1</span>, also known as Thiamin helps:
        <ul>
          <li>
            The body break down and release energy from food
          </li>
          <li>Keep the nervous system healthy</li>
        </ul>
        <div class="vitFoods">Good sources of vitamin B include: peas, fresh fruits, nuts and wholegrain breads</div>
      </div>
      <div class="vitDesc">
        <span class="vitSpan">Vitamin C</span>, also known as ascorbic acid, has several important functions.
        <ul>
          <li>
            Helping to protect cells and keeping them healthy
          </li>
          <li>Maintaining healthy skin, blood vessels, bones and cartilage</li>
          <li>
            Helping with wound healing
          </li>
        </ul>
        <div class="vitFoods">Good sources of vitamin C include: potatoes, broccoli, peppers and citrus fruit</div>
      </div>
      <div class="vitDesc">
        <span class="vitSpan">Vitamin D</span> helps regulate the amount of calcium and phosphate in the body.
        <ul>
          <li>
            These nutrients are needed to keep bones, teeth and muscles healthy.
          </li>
          <li>
            A lack of vitamin D can lead to bone deformities such as rickets in
            children, and bone pain caused by a condition called osteomalacia in
            adults.
          </li>
        </ul>
        <div class="vitFoods">Good sources of vitamin D include: red meat, egg yolks and liver</div>
      </div>
      <div class="vitDesc">
        <span class="vitSpan">Vitamin E</span> helps maintain healthy skin and eyes, and strengthen the body's
        natural defence against illness and infection (the immune system).
        <div class="vitFoods">Good sources of vitamin E include: nuts, seeds and plant oils</div>
      </div>
      <div class="vitDesc">
        <span class="vitSpan">Vitamin K</span> is a group of vitamins that the body needs for blood clotting,
        helping wounds to heal.
        <br />
        There's also some evidence vitamin K may help keep bones healthy.
        <div class="vitFoods">Good sources of vitamin K include: green leafy vegetables such as broccoli, vegetable oils and cereal grains</div>
      </div>
      <div class="vitDesc">
        <span class="vitSpan">Calcium</span> has several important functions.
        <ul>
          <li>
            Helping build strong bones and teeth
          </li>
          <li>Regulating muscle contractions, including your heartbeat</li>
          <li>
            Making sure blood clots normally
          </li>
        </ul>
        <div class="vitFoods">Good sources of calcium include: milk, cheese and other dairy, soya drinks and fish where you eat the bones such as sardines</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "resultsWater",
    "resultsA",
    "resultsB",
    "resultsC",
    "resultsD",
    "resultsE",
    "resultsK",
    "resultsCalc",
  ],
  data(){
    return {
      resultColour: 'poor-result'
    }
  },
};
</script>

<style scoped>

.resultContainer {
  padding-bottom: 5rem;
}

.resultHeader {
  margin-bottom: 2rem;
}

.overviewHeader {
  margin-bottom: 2rem;
}
.resultValue {
  padding: 0.5rem;
}
.vitDesc {
  text-align: left;
  margin-bottom: 2rem;
}

.good-result {
  color: #00cd00;
  font-weight: bold;
}
.poor-result {
  color: orange;
  font-weight: bold;
}
.vitSpan {
  color: #0073c7;
  font-weight: bold;
}
</style>
