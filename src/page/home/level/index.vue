<template>
  <div class="level">
    <h1>医院</h1>
    <div class="hospital">
      <p>等级:</p>
      <ul>
        <li :class="activeStr === '' ? 'active' : ''" @click="activeLevel('')">全部</li>
        <li v-for="item of levelArr" :class="activeStr === item.value.toString() ? 'active' : ''" :key="item.value"
            @click="activeLevel(item.value)">{{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {reqHospitalLevelAndRegion} from "@/api/home";
import {HospitalLevelAndRegionResponseData} from "@/api/home/type.ts";

const levelArr = ref<HospitalLevelAndRegionResponseData>([])
const activeStr = ref<string>('')
const emit = defineEmits(['getLevel']);


onMounted(() => {
  getLevel()
})
const activeLevel = (value: string) => {
  activeStr.value = value
  emit('getLevel', value);
}

//获取医院等级
const getLevel = async () => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
  //存储医院等级数据
  if (result.code == 200) {
    levelArr.value = result.data;
  }
}
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
