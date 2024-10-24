<template>
  <div>
    <Carousel/>
    <!--  搜索组件  -->
    <Search/>

    <el-row :gutter="20">
      <el-col :span="20">
        <Level @getLevel="getLevel"/>
        <Region @getRegion="getRegion"/>
        <div class="hospitals" v-if="hospitals.length > 0">
          <Card v-for="(itme,index) in hospitals" :key="index" :hospitalInfo="itme">
          </Card>
        </div>
        <div v-else>
          <el-empty :image-size="200" />
        </div>
        <el-pagination
            :page-sizes="[10, 20, 30, 40, 50]"
            @current-change="currentChange"
            layout=" prev, pager, next, jumper,sizes,total"
            :total="total"
            @size-change="sizeChange"
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
import {onMounted, ref} from "vue";
import {reqHospital} from "@/api/home";
import {Content} from "@/api/home/type.ts";

const hospitals = ref<Content>([])
const current = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(0)
const hostType = ref<string>()
const districtCode = ref<string>()


const currentChange = (page: number) => {
  current.value = page;
  getHospital()
}
const sizeChange = (size: number) => {
  pageSize.value = size;
  getHospital()
}

/**
 * 子事件
 * @param level
 */
const getLevel = (level: string) => {
  hostType.value = level
  getHospital()
}

const getRegion = (code: string) => {
  districtCode.value = code
  getHospital()
}

const getHospital = async () => {
  const res = await reqHospital(current.value, pageSize.value, hostType.value, districtCode.value)
  hospitals.value = res.data.content
  total.value = res.data.totalElements
}
onMounted(() => {
  getHospital()
})
</script>

<style scoped lang="scss">
.hospitals {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  justify-content: space-between;

}

</style>
