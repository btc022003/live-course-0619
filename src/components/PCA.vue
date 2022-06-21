<template>
  <div class="area-sel flex flex-col gap-4">
    <select
      v-model="province"
      placeholder="请选择省份"
      class="border px-4 py-1"
    >
      <option v-for="item in provinces" :value="item.code">
        {{ item.name }}
      </option>
    </select>
    <select placeholder="请选择城市" v-model="city" class="border px-4 py-1">
      <option v-for="item in cities" :value="item.code">
        {{ item.name }}
      </option>
    </select>
    <select placeholder="请选择区县" v-model="area" class="border px-4 py-1">
      <option v-for="item in areas" :value="item.code">
        {{ item.name }}
      </option>
    </select>
    <select placeholder="请选择街道" v-model="street" class="border px-4 py-1">
      <option v-for="item in streets" :value="item.code">
        {{ item.name }}
      </option>
    </select>
  </div>

  <h2>{{ result }}</h2>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import pcaData from '../assets/pcas-code.json';

type AreaItem = {
  code?: string;
  name?: string;
  children?: any;
};

// 省市区县街道四级联动
// @ts-ignore
pcaData.unshift({ code: '', name: '--请选择--' });
const provinces = ref<AreaItem[]>(pcaData); // 所有的数据
const cities = ref<AreaItem[]>([{ code: '', name: '--请选择--' }]); // 地级市数据
const areas = ref<AreaItem[]>([{ code: '', name: '--请选择--' }]); // 区县数据
const streets = ref<AreaItem[]>([{ code: '', name: '--请选择--' }]); // 街道数据
const province = ref<string>(''); // 选中的省份
const city = ref<string>(''); // 选中的地级市
const area = ref<string>(''); // 选中的区县数据
const street = ref<string>(''); // 选中的街道
// const result = ref<string[]>(['','','','']) // 选择结果
watch(province, (v) => {
  // console.log(v);
  cities.value = [
    { code: '', name: '--请选择--' },
    ...provinces.value.find((item) => item.code == v)?.children,
  ];
  areas.value = [{ code: '', name: '--请选择--' }];
  streets.value = [{ code: '', name: '--请选择--' }];
  city.value = '';
  area.value = '';
  street.value = '';
});
watch(city, (v) => {
  if (v == '') return;
  areas.value = [
    { code: '', name: '--请选择--' },
    ...cities.value.find((item) => item.code == v)?.children,
  ];
  streets.value = [{ code: '', name: '--请选择--' }];
  street.value = '';
});
watch(area, (v) => {
  if (v == '') return;
  streets.value = [
    { code: '', name: '--请选择--' },
    ...areas.value.find((item) => item.code == v)?.children,
  ];
});

const result = computed(() => {
  return (
    provinces.value.find((p) => p?.code == province.value)?.name +
    '-' +
    cities.value.find((c) => c?.code == city.value)?.name +
    '-' +
    areas.value.find((a) => a?.code == area.value)?.name +
    '-' +
    streets.value.find((a) => a?.code == street.value)?.name
  );
});
</script>
<style scoped></style>
