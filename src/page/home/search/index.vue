<template>
  <div>
    <div class="search">
      <el-autocomplete
          clearable
          class="inline-input w-50"
          placeholder="请输入医院名称"
      />
      <el-button type="primary" :icon="Search">搜索</el-button>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Search} from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 10px 0 ;


  ::v-deep(.el-autocomplete) {
    max-width: 600px;
    margin-right: 10px;
  }
}
</style>
