<template>
  <div>请求测试页</div>
</template>

<script>
import HomeModel from "@/models/home";
const homeModel = new HomeModel();
export default {
  name: "Home",
  data() {
    return {
      form: {
        user_id: "1011313578"
      }
    };
  },
  mounted() {
    this.getData();
    this.postUserInfo();
  },
  methods: {
    async getData() {
      const { data: res } = await homeModel.getHomeData();
      if (res.code === 0) {
        console.log(res.result);
      }
    },
    async postUserInfo() {
      const { data: res } = await homeModel.postUserInfo(this.form);
      if (res.code === 0) {
        console.log(res.result);
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
