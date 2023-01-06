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
      test: 1,
      test1: "1",
    };
  },
  methods: {
    btnClick() {
      this.test = this.test + 1;
      this.test1 = "123";
      console.log("btnClick");
    },
  },
};
</script>
