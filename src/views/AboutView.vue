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
      aboutInt: 1,
      aboutString: "1",
    };
  },
  methods: {
    btnClick() {
      this.aboutInt = this.aboutInt + 1;
      this.aboutString = "123";
      console.log(this.aboutInt, this.aboutString);
    },
  },
};
</script>
<style lang=""></style>
