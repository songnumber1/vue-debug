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
  data() {
    return {
      aboutInt: 1,
      aboutString: "1",
    };
  },
  methods: {
    /**
     * @description btnClick입니다.
     */
    btnClick() {
      this.aboutInt = this.aboutInt + 1;
      this.aboutString = "123";
      console.log(this.aboutInt, this.aboutString);
    },

    /**
     * @description btnClick1 매서드입니다.
     */
    btnClick1() {
      this.btnClick();
    },
  },
};
</script>
