<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="btnClick">btnClick</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
/**
 * write a component's description
 */
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  /**
   * @description
   * @returns {any}
   */
  data() {
    return {
      homeInt: 1,
      homeString: "1",
    };
  },
  methods: {
    /**
     * @description
     */
    btnClick() {
      this.homeInt = this.homeInt + 1;
      this.homeString = "123";
      console.log(this.homeInt, this.homeString);
    },
  },
};
</script>
