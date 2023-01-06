<template lang="">
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="btnClick">btnClick</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ttt: 1,
      ttt1: "1",
    };
  },
  methods: {
    btnClick() {
      this.ttt = this.ttt + 1;
      this.ttt1 = "123";
      console.log(this.ttt, this.ttt1);
    },
  },
};
</script>
<style lang=""></style>
