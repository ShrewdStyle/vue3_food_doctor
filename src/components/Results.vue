<template>
  <div class="container">
    <div class="resultContainer">
      <h2>Your current results are:</h2>
      <div class="resultValue">Water intake: {{ resultsWater }}</div>
      <div class="resultValue">Vitamin A: {{ resultsA }}</div>
      <div class="resultValue">Vitamin B: {{ resultsB }}</div>
      <div class="resultValue">Vitamin C: {{ resultsC }}</div>
      <div class="resultValue">Vitamin D: {{ resultsD }}</div>
      <div class="resultValue">Vitamin E: {{ resultsE }}</div>
      <div class="resultValue">Vitamin K: {{ resultsK }}</div>
      <div class="resultValue">Calcium: {{ resultsCalc }}</div>
    </div>
    <div class="overview">
      <h2>
        The descriptions below show the importance of each vitamin and how they
        help your body.
      </h2>
      <div class="vitDesc">
        Vitamin A, also known as retinol, has several important functions. These
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
      </div>
      <div class="vitDesc">
        Thiamin, also known as vitamin B1, helps:
        <ul>
          <li>
            The body break down and release energy from food
          </li>
          <li>Keep the nervous system healthy</li>
        </ul>
      </div>
      <div class="vitDesc">
        Vitamin C, also known as ascorbic acid, has several important functions.
        <ul>
          <li>
            Helping to protect cells and keeping them healthy
          </li>
          <li>Maintaining healthy skin, blood vessels, bones and cartilage</li>
          <li>
            Helping with wound healing
          </li>
        </ul>
      </div>
      <div class="vitDesc">
        Vitamin D helps regulate the amount of calcium and phosphate in the body.
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
      </div>
      <div class="vitDesc">
        Vitamin E helps maintain healthy skin and eyes, and strengthen the body's
        natural defence against illness and infection (the immune system).
      </div>
      <br />
      <div class="vitDesc">
        Vitamin K is a group of vitamins that the body needs for blood clotting,
        helping wounds to heal.
        <br />
        There's also some evidence vitamin K may help keep bones healthy.
      </div>
      <div class="vitDesc">
        Calcium has several important functions.
        <ul>
          <li>
            Helping build strong bones and teeth
          </li>
          <li>Regulating muscle contractions, including your heartbeat</li>
          <li>
            Making sure blood clots normally
          </li>
        </ul>
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
};
</script>

<style scoped>

.resultContainer {
  padding-bottom: 5rem;
}
.resultValue {
  padding: 0.5rem;
}
.vitDesc {
  text-align: left;
}
</style>
