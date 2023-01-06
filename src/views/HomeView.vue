<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="btnClick">btnClick</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      homeInt: 1,
      homeString: "1",
    };
  },
  methods: {
    btnClick() {
      this.homeInt = this.homeInt + 1;
      this.homeString = "123";
      console.log(this.homeInt, this.homeString);
    },
  },
};
</script>
