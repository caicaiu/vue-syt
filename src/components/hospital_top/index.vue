<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="toRouter('/home')">
        <img src="../../assets/images/logo.png" alt="尚医通">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const toRouter = (path: string) => {
  router.push(path)
}
</script>

<style scoped lang="scss">
.top {
  z-index: 999;
  background: #fff;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  position: fixed;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      cursor: pointer;
      display: flex;
      align-items: center;

      img {
        height: 70px;
      }

      p {
        font-size: 24px;
        margin-left: 20px;
        color: #55a6fe;
      }
    }

    .right {
      display: flex;
      align-items: center;

      p {
        font-size: 14px;
        color: #bbb;
      }

      p:first-child {
        margin-right: 20px;

      }
    }
  }
}
</style>
