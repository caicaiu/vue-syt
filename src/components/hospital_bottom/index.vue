<template>
  <div class="bottom">
    <div class="content">
      <div class="left">
        <p>京ICP备 13018369号 电话挂号010-56253825</p>
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.bottom {
  height: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #F0F2F5;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #888888;

    .right {
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>
