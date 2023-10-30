<template lang="">
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="btnClick">btnClick</button>
  </div>
</template>
<script>
/**
 * write a component's description
 */
export default {
  /**
   * @description
   * @returns {any}
   */
  data() {
    return {
      aboutInt: 1,
      aboutString: "1",
    };
  },
  methods: {
    /**
     * @description
     */
    btnClick() {
      this.aboutInt = this.aboutInt + 1;
      this.aboutString = "123";
      console.log(this.aboutInt, this.aboutString);
    },
  },
};
</script>
<style lang=""></style>
