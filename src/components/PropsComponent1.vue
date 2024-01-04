<template>
  <div>
    <input ref="refInput" type="text" :v-model="params.data" />
    <button @click="search">search</button>
    <button @click="search">setInputText</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: { data: "" },
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    setInputText() {
      this.params.data = "1111";
    },
    search() {
      this.params.data = this.$refs.refInput.value;
      console.log("변경 이전", this.params);
      this.$emit("search", this.params);
    },
  },
};
</script>

<style></style>
