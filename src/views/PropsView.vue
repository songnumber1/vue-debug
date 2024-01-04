<template>
  <div>
    <PropsComponent1 ref="com1" @search="searchClick"></PropsComponent1>
    <PropsComponent2 ref="com2" :params="params"></PropsComponent2>
  </div>
</template>

<script>
import PropsComponent1 from "@/components/PropsComponent1.vue";
import PropsComponent2 from "@/components/PropsComponent2.vue";

export default {
  components: { PropsComponent1, PropsComponent2 },

  data() {
    return {
      params: {},
    };
  },

  mounted() {
    // this.$refs.com1.search();
  },

  methods: {
    searchClick(params) {
      console.log("searchClick", params);
      this.params = JSON.stringify(params);
      this.$refs.com2.list();
    },
  },
};
</script>

<style></style>
