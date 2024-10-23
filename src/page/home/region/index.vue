<template>
  <div class="region">
    <p>地区:</p>
    <ul>
      <li class="active">全部</li>
      <li>东城区</li>
      <li>西城区</li>
      <li>朝阳区</li>
      <li>丰台区</li>
      <li>石景山区</li>
      <li>海淀区</li>
      <li>门头沟区</li>
      <li>房山区</li>
      <li>通州区</li>
      <li>顺义区</li>
      <li>昌平区</li>
      <li>大兴区</li>
      <li>怀柔区</li>
      <li>平谷区</li>
      <li>密云县</li>
      <li>延庆县</li>
      <li>延庆镇</li>
      <li>平谷镇</li>
      <li>怀柔镇</li>
    </ul>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.region {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  color: #888;

  p {
    width: 35px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    .active {
      color: #ff5a5f;
    }

    li {
      margin-left: 10px;
      margin-bottom: 10px;
    }

    li:hover {
      color: #ff5a5f;
      cursor: pointer;
    }
  }
}
</style>
