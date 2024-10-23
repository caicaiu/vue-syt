<template>
  <div class="level">
    <h1>医院</h1>
    <div class="hospital">
      <p>等级:</p>
      <ul>
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级乙等</li>
        <li>三级丙等</li>
        <li>三级丁等</li>
        <li>四级甲等</li>
        <li>四级乙等</li>
        <li>四级丙等</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.level {
  h1 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .hospital {
    display: flex;
    font-size: 14px;
    color: #888888;
    ul {
      display: flex;
      .active {
        color: #f50;
      }

      li {
        margin-left: 10px;
        cursor: pointer;
      }

      li:hover {
        color: #f50;
      }
    }
  }
}
</style>
