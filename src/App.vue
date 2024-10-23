<template>
  <el-config-provider :locale="locale">
    <div class="container">
      <HospitalTop/>
      <div class="content">
        <router-view/>
      </div>
      <HospitalBottom/>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn

</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    min-height: 100vh;
    width: 1200px;
  }

  .footer {
    width: 100%;
    height: 70px;
    background: skyblue;
  }
}
</style>

