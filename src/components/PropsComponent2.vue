<template>
  <div></div>
</template>

<script>
export default {
  // props: ["params"],
  mounted() {
    //console.log("component2", this.params);
  },
  // watch: {
  //   params: {
  //     deep: true,
  //     handler() {
  //       console.log("변경 감지", this.params);
  //     },
  //   },
  // },

  data() {
    return {
      params: {},
    };
  },

  methods: {
    list(params) {
      this.params = params;
      console.log("list", this.params);
    },
  },
};
</script>

<style></style>
