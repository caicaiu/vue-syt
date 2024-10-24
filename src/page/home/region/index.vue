<template>
  <div class="region">
    <p>地区:</p>
    <ul>
      <li :class="activeStr === '' ? 'active' : ''" @click="activeLevel('')">全部</li>
      <li v-for="item of regionArr" :class="activeStr === item.value.toString() ? 'active' : ''" :key="item.value"
          @click="activeLevel(item.value)">{{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {reqHospitalLevelAndRegion} from "@/api/home";
import {HospitalLevelAndRegion, HospitalLevelAndRegionResponseData} from "@/api/home/type.ts";
import {onMounted, ref} from "vue";

const regionArr = ref<HospitalLevelAndRegion[]>([]);
const activeStr = ref('')
const activeLevel = (value: string) => {
  activeStr.value = value
  emit('getRegion', value)
}
const emit = defineEmits(['getRegion']);

//获取地区
const getRegion = async () => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin');
  //存储医院地区数据
  if (result.code == 200) {
    regionArr.value = result.data;
  }
}

onMounted(() => {
  getRegion()
})

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
