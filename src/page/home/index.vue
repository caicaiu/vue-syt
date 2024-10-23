<template>
  <div>
    <Carousel/>
    <!--  搜索组件  -->
    <Search/>

    <el-row :gutter="20">
      <el-col :span="20">
        <Level/>
        <Region/>
        <div class="hospitals">
          <Card v-for="itme in 10"></Card>
        </div>
        <el-pagination
            :page-sizes="[20, 30, 40, 50]"
            layout=" prev, pager, next, jumper,sizes,total"
            :total="400"
        />
      </el-col>

      <el-col :span="4">右边</el-col>
    </el-row>

  </div>

</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
</script>

<style scoped lang="scss">
.hospitals {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 ;
  justify-content: space-between;

}

</style>
