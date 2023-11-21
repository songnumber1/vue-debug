<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>HomeView-1</h1>
  </div>
</template>

<script>
import axios from "@/http/axios";

export default {
  name: "HomeView1",
  data() {
    return {
      homeInt: 1,
      homeString: "1",
    };
  },
  methods: {
    /**
     * @description btnClick입니다.
     *
     */
    btnClick() {
      this.homeInt = this.homeInt + 1;
      this.homeString = "123";
      console.log(this.homeInt, this.homeString);
    },
    /**
     * @description btnClick1 매서드입니다.
     */
    btnClick1() {
      this.btnClick();
    },
    /**
     * @description axios 정상 반환 REST api를 호출합니다.
     */
    btnAxiosCall() {
      axios
        .get("/axios/test/1111111")
        .then((res) => {
          console.log("btnAxiosCall sucess", res);
          //this.axiosResult = res.data.data.map((item) => item.name)
        })
        .catch((err) => {
          console.log("btnAxiosCall fail", err);
        });
    },
    /**
     * @description axios 오류 반환 REST api를 호출합니다.
     */
    btnAxiosErrorCall() {
      axios
        .get("/axios/test/error/1111111")
        .then((res) => {
          console.log("btnAxiosCall sucess", res);
          //this.axiosResult = res.data.data.map((item) => item.name)
        })
        .catch((err) => {
          console.log("btnAxiosCall fail", err);
        });
    },
  },
};
</script>
