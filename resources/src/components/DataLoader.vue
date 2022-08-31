<template>
  <div class="text-center py-5">
    <div
      v-if="!_border"
      class="d-flex align-items-center justify-content-center"
    >
      <!-- <div class="spinner-grow spinner-grow-lg" role="status">
            <span class="sr-only">Loading...</span>
        </div> -->
      <div class="data-loader loading-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; display: block"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="50" cy="50" r="23" fill="#0054a7">
            <animate
              attributeName="cx"
              values="71.21320343559643;28.78679656440357;71.21320343559643"
              keyTimes="0;0.5;1"
              dur="1.4925373134328357s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              repeatCount="indefinite"
              begin="-0.3731343283582089s"
            ></animate>
            <animate
              attributeName="cy"
              values="71.21320343559643;28.786796564403577;71.21320343559643"
              keyTimes="0;0.5;1"
              dur="1.4925373134328357s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              repeatCount="indefinite"
              begin="-0.3731343283582089s"
            ></animate>
            <animate
              attributeName="r"
              values="23;4.6000000000000005;23;4.6000000000000005;23"
              keyTimes="0;0.25;0.5;0.75;1"
              dur="1.4925373134328357s"
              repeatCount="indefinite"
              begin="-0.3731343283582089s"
            ></animate>
          </circle>
          <circle cx="50" cy="50" r="23" fill="#b3caf0">
            <animate
              attributeName="cx"
              values="28.786796564403577;71.21320343559643;28.786796564403577"
              keyTimes="0;0.5;1"
              dur="1.4925373134328357s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              repeatCount="indefinite"
              begin="0s"
            ></animate>
            <animate
              attributeName="cy"
              values="71.21320343559643;28.78679656440357;71.21320343559643"
              keyTimes="0;0.5;1"
              dur="1.4925373134328357s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              repeatCount="indefinite"
              begin="0s"
            ></animate>
            <animate
              attributeName="r"
              values="23;4.6000000000000005;23;4.6000000000000005;23"
              keyTimes="0;0.25;0.5;0.75;1"
              dur="1.4925373134328357s"
              repeatCount="indefinite"
              begin="0s"
            ></animate>
          </circle>
        </svg>
      </div>

      <h2 class="mb-0 text-white" v-if="!placeholder">Loading Data Please Wait</h2>
      <h3 class="mb-0 text-white" v-else></h3>
    </div>
    <div v-else>
      <div class="spinner-border text-white" role="status">
        <span class="sr-only text-white">Loading...</span>
        <h4 class="mb-0 text-white" v-if="placeholder">{{ placeholder }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["_border", "placeholder"],
};
</script>

<style lang="scss">
.data-loader.loading-container {
  height: 50px;
  width: 50px;
}
</style>